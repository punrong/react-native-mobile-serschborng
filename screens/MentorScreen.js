import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Card from '../components/Card';

export default class MenteeList extends Component {

    state = {
        mentees: 
            [
                {
                    source: 'https://besthqwallpapers.com/Uploads/14-9-2018/65836/thumb2-gin-ichimaru-close-up-manga-blue-eyes-bleach.jpg',
                    name: 'Ichimaru Gin',
                    stars: 3,
                    appointments: 10
                },
                {
                    source: 'https://yt3.ggpht.com/a/AGF-l79SpPxDb2ivnqA5RfPpfH5XafXQg-oj-OQ-XA=s900-c-k-c0xffffffff-no-rj-mo',
                    name: 'Five RemG',
                    stars: 5,
                    appointments: 100
                },
                {
                    source: 'https://i.pinimg.com/originals/8a/bc/d3/8abcd3d7e2c84553102cec1c7afbc99b.png',
                    name: 'Chitanda Eru',
                    stars: 4,
                    appointments: 50
                },
                {
                    source: 'https://66.media.tumblr.com/c218f12e8c56b653f430eaec3d52e896/tumblr_p3qjymvsfV1x0h5yoo1_250.jpg',
                    name: 'Rem',
                    stars: 5,
                    appointments: 90
                },
                {
                    source: 'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/cdn/1a15dd57-5376-4797-88f4-b412898912a6/b50293ee-0f6e-4a85-8651-9b309b4a1782_560_420.jpg',
                    name: 'Queen Decim',
                    stars: 4,
                    appointments: 3
                }
            ]
    };

    componentWillMount() {}

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.listStyle}>{
                    (function (mentees) {
                        const result = [];
                        mentees.forEach(
                            (mentee, i) => {
                                result.push(<Card key={i} mentee={mentee} />);
                            }
                        );
                        return result;
                    })(this.state.mentees)
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