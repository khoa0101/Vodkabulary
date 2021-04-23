import React from "react";
import DrinkShowContainer from "./drink_show_container";
import DrinksContainer from "../Drinks/drinks_container";

class DrinkRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeDrink: null,
            activeRow: false,
            toggle: false
        }

        this.showLeftArrow = false;
        this.transitioning = false;
        this.showRightArrow = false;

        this.setActiveDrink = this.setActiveDrink.bind(this);
                this.closeShow = this.closeShow.bind(this);
        this.shiftForward = this.shiftForward.bind(this);
        this.updateToggle = this.updateToggle.bind(this);
        this.switchOffTransition = this.switchOffTransition.bind(this);
        this.stopHoverPropagation = this.stopHoverPropagation.bind(this);
                this.shiftBack = this.shiftBack.bind(this);

        this.switchOnTransition = this.switchOnTransition.bind(this);


    }

    componentDidMount() {
        this.mounted = true;
        this.updateRightArrow();

        const drinkscrolling = document.getElementById(`${this.props.name}-drinkscrolling`);
        drinkscrolling.addEventListener("transitionstart", this.switchOnTransition);
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    setActiveDrink(drink) {
        if (!this.props.hideTitle) {
            this.props.history.push(`/browse/${drink.id}`)
        }




        this.setState({
            activeDrink: drink,
            activeRow: true
        })
    }

    shiftForward() {
        const drinkscrolling = document.getElementById(`${this.props.name}-drinkscrolling`);
        const wrapper = document.getElementById(`${this.props.name}-wrapper`);
        
        const shiftLength = (drinkscrolling.offsetWidth - wrapper.offsetWidth) * -1;

        if (shiftLength < 0) {
            drinkscrolling.style.transform = `translateX(${shiftLength + "px"})`;
            this.showRightArrow = false;
            this.showLeftArrow = true;
            this.updateToggle();
        }
    }



    shiftBack() {
        const drinkscrolling = document.getElementById(`${this.props.name}-drinkscrolling`);
        drinkscrolling.style.transform ="";

        this.showRightArrow = true;
        this.showLeftArrow = false;
        this.updateToggle();
    }

    closeShow() {
        if (!this.props.hideTitle) this.props.history.push("/browse")

        if (this.mounted) {
            this.setState({
                activeDrink: null,
                activeRow: false
            })
        }
    }

    updateRightArrow() {
        const drinkscrolling = document.getElementById(`${this.props.name}-drinkscrolling`);


        const wrapper = document.getElementById(`${this.props.name}-wrapper`);

        const shiftLength = (drinkscrolling.offsetWidth - wrapper.offsetWidth) * -1;

        this.showRightArrow = shiftLength < 0;
        this.setState({toggle: !this.state.toggle})
    }

    updateToggle() {
        this.setState({toggle: !this.state.toggle})
    }

    stopHoverPropagation(e) {
        if (this.transitioning) e.stopPropagation()
    }

    switchOnTransition(event) {
        if (event.srcElement.id.includes("drinkscrolling")) {
            this.transitioning = true;
        } 
    }
    
    switchOffTransition(event) {
        this.transitioning = false;
    }



    render() {
        const { name, drinks } = this.props;
        const { activeRow, activeDrink } = this.state;
        let drinkItems = [];   
        
        for (let [title, details] of drinks) {
            let activeStatus;
            if (activeDrink) {
                activeStatus = activeDrink.id === details.id;
            }

            const inProfileListRow = this.props.hideGenre;

            const drinkItem = (
                <DrinkContainer key={details.id} 
                    title={title} 
                   
                    activeRow={activeRow}
                     details={details} 
                    activeDrink={activeStatus}
                    setActiveDrink={this.setActiveDrink}
                    inProfileListRow={inProfileListRow}
                />
            )
            drinkItems.push(drinkItem)
        }

        let drinkShow;
        if (activeRow) {
            drinkShow = (
                <DrinkShowContainer genre={name} details={activeDrink} close={this.closeShow} hideGenre={this.props.hideGenre} />
            )
        }

        let rightArrow;
        let leftArrow;
        let titleDiv;




        if (!this.props.hideTitle) titleDiv=(<h2 className="genre-title" >{name}</h2>)
        if (!this.props.hideTitle && this.showRightArrow) {
            rightArrow=(<div className="drinkscrolling-right" onClick={this.shiftForward}></div>)
        } else {
            rightArrow=(<div className="drinkscrolling-right invisible" onClick={this.shiftForward}></div>)
        }

        if (this.showLeftArrow) {
            leftArrow = (<div id={`${name}-drinkscrolling-btn`} className="drinkscrolling-left" onClick={this.shiftBack}></div>);
        } else {
            leftArrow = (<div id={`${name}-drinkscrolling-btn`} className="drinkscrolling-left invisible" onClick={this.shiftBack}></div>);
        }

        return (
            <div className="drink-row-main">
                {titleDiv}
                <div className="drinks-container" onMouseEnter={this.stopHoverPropagation}>
                    {leftArrow}                    
                    <div id={`${name}-wrapper`} className="drinkscrolling-wrapper">
                        <div id={`${name}-drinkscrolling`} onTransitionEnd={this.switchOffTransition}  className="drinkscrolling">
                            {drinkItems}
                        </div>
                    </div>
                    {rightArrow}
                </div>

                {drinkShow}
            </div>
        )
    }

}

export default DrinkRow;