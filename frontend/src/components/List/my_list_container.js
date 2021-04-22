import { connect } from "react-redux";
import MyList from "./my_list";
import { setActiveProfile, getUserProfiles } from "../../actions/profile_actions";
import { getProfileList } from "../../actions/list_actions";

const msp = (state, ownProps) => ({

    userProfiles: state.entities.profiles,

    activeProfile: state.entities.activeProfile.profile,

    history: ownProps.history,

    currentUserId: state.session.id,
    profileList: state.entities.list
})

const mdp = dispatch => ({
    setActiveProfile: profile => dispatch(setActiveProfile(profile)),
    getUserProfiles: id => dispatch(getUserProfiles(id)),
    getProfileList: listId => dispatch(getProfileList(listId))
})


export default connect(msp, mdp)(MyList);