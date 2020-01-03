import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MentorCard from '../components/MentorCard';
import { db } from '../Firebase_Config/db_config';
import AnimatedLoader from "react-native-animated-loader";
import Firebase from 'firebase';

var MENTORS = [];
var selectedProgramID=null;
// var loader;
export default class MentorScreen extends React.Component {
    
    constructor(props){
        super(props)
        selectedProgramID = props.navigation.state.params.selectedProgram.id;
        this.state = {
            isLoading: true,
            mentorList: []
        }
    }

    componentDidMount() {
        let mentorList = [];
        MENTORS = [];
            db.ref('Mentors/').ref.once('value', async (snapshot) => {
                snapshot.forEach( await function(childSnapshot) {
                    if(childSnapshot.val().programID === selectedProgramID){
                        mentorList = {
                        id:  childSnapshot.val().id,
                        name:  childSnapshot.val().name,
                        programID: childSnapshot.val().programID,
                        programName: childSnapshot.val().programName,
                        imageURI: childSnapshot.val().imageURI,
                        appointment: childSnapshot.val().appointment,
                        award: childSnapshot.val().award,
                        education: childSnapshot.val().education
                }
                        // var storageRef =  Firebase.storage().ref(mentorList.imageURI);
                        // storageRef.getDownloadURL().then( async function(url) {
                        //     mentorList.imageURI = url
                        //     console.log(mentorList.imageURI);
                        // }, function(error){
                        //     console.log(error);
                        // });
                        MENTORS.push(mentorList);
                }
                })
                this.setState({mentorList: MENTORS});
                this.setState({isLoading: false});
          });
    }

    render() {
        if(this.state.isLoading)
            return(
                <AnimatedLoader
                visible={this.state.isLoading}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../resources/loader.json")}
                animationStyle={{    width: 100,
                  height: 100,
                }}
                speed={3}
              />
            )
        const navigation = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.listStyle}>{
                    (function (mentorList) {
                        const result = [];
                        mentorList.forEach(
                            (mentor, i) => {
                                result.push(<MentorCard mentor={mentor} navigation={navigation} />);
                            }
                        );
                        return result;
                    })(this.state.mentorList)
                    }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    listStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});