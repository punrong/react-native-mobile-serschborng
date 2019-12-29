import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import MentorCard from '../components/MentorCard';
import { db } from '../Firebase_Config/db_config';

var MENTORS = [];
var selectedProgramID=null
export default class MentorScreen extends React.Component {
    
    constructor(props){
        super(props)
        selectedProgramID = props.navigation.state.params.selectedProgram.id;
        this.state = {
            mentorList: []
        }
    }

    componentDidMount() {
        let mentorList = [];
        MENTORS = [];
           let ref = db.ref('Mentors/');
           let message = ref.once('value', async (snapshot) => {
            snapshot.forEach( await function(childSnapshot) {
                if(childSnapshot.val().programID === selectedProgramID){
                    mentorList = {
                    id:  childSnapshot.val().id,
                    name:  childSnapshot.val().name,
                    programID: childSnapshot.val().programID,
                    programName: childSnapshot.val().programName,
                    imageURI:  childSnapshot.val().imageURI,
                    appointment: childSnapshot.val().appointment,
                    award: childSnapshot.val().award,
                    education: childSnapshot.val().education
              }
                    MENTORS.push(mentorList);
            }
            })
            this.setState({mentorList: MENTORS});
          });
      }

    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.listStyle}>{
                    (function (mentorList) {
                        const result = [];
                        mentorList.forEach(
                            (mentor, i) => {
                                result.push(<MentorCard key={mentor.id} mentor={mentor} navigation={navigation} />);
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