import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
  DeviceshpeEmitter,
  Alert } from 'react-native';
import { Card, Button, List, ListItem, Divider, Avatar } from 'react-native-elements';

class EBoard extends Component {
  render() {
    const {
      cardContainer,
      shpeInfoContainer,
      shpeInfoRow,
      infoLabel,
      contactStyle,
      contactInfo,
      infoValue,
      signalInfoLabel,
      titleColor } = styles;

    return (
      <View style={styles.container}>
        <ScrollView style={{backgroundColor: '#0c0b0b'}}>
          <Card
            title='Ana Riveros'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'President'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/SHPEofficer-36-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'president.shpeucf@gmail.com'}
                </Text>
                </Text>
            </View>
          </Card>

          <Card
            title='Sebastian Hernandez'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'External Vice President'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/SHPEofficer-4-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'vpexternal.shpeucf@gmail.com'}
                </Text>
                </Text>
            </View>
          </Card>

          <Card
            title='Carlos Arboleda'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'Internal Vice President'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/SHPEofficer-29-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'shpe.ucf.chapter@gmail.com'}
                </Text>
                </Text>
            </View>
          </Card>

          <Card
            title='Tomas Serna'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'Secretary'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/SHPEofficer-8-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'shpe.ucf.chapter@gmail.com'}
                </Text>
                </Text>
            </View>
          </Card>

          <Card
            title='Andres Alvarez'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'Treasurer'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/SHPEofficer-32-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'treasurer.shpeucf@gmail.com'}
                </Text>
                </Text>
            </View>
          </Card>

          <Card
            title='Desiree Dominguez'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'Graduate Ambassador'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/SHPEofficer-5-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'dominguezdesiree@knights.ucf.edu'}
                </Text>
                </Text>
            </View>
          </Card>

          <Card
            title='Camille Morar'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'Events Chair'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/Image-from-iOS-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'camille.morar@knights.ucf.edu'}
                </Text>
                </Text>
            </View>
          </Card>


          <Card
            title='Juancarlos Hernandez'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'MentorSHPE Director'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/SHPEHeadshotsCropped-4-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'jhhernandez262@knights.ucf.edu'}
                </Text>
                </Text>
            </View>
          </Card>

          <Card
            title='Jaime Hernandez'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'SHPE Jr. Coordinator'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/SHPEofficer-13-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'shpejr.shpeucf@gmail.com'}
                </Text>
                </Text>
            </View>
          </Card>

          <Card
            title='Haniel Diaz'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'Tech Director'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/SHPEofficer-15-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'tech.shpeucf@gmail.com'}
                </Text>
                </Text>
            </View>
          </Card>

          <Card
            title='Linette Martinez'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'Development Chair'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/SHPEofficer-33-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'Lmartinez2402@knights.ucf.edu'}
                </Text>
                </Text>
            </View>
          </Card>

          <Card
            title='Francisco Rivera'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'Membership Chair'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/20190128_132023-150x150.jpg"}}
                  />
              </View>
              <Text style={{fontSize: 17, fontWeight: "bold", alignItems: "center", justifyContent: "center", color: 'white'}}>
                  {'Contact:  '}
                  <Text style={{fontSize: 17, fontWeight: 'normal', alignItems: "center", justifyContent: "center", color: '#FFC107', textDecorationLine: 'underline'}}>
                  {'francisco.rivera0719@knights.ucf.edu'}
                </Text>
                </Text>
            </View>
          </Card>

          <Card
            title='Mariana González'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'Marketing Chair'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/SHPEofficer-9-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'M3gonzalez@knights.ucf.edu'}
                </Text>
                </Text>
            </View>
          </Card>

          <Card
            title='Tatiana Ocampo'
            titleStyle={titleColor}
            containerStyle={cardContainer}>
            <View style={shpeInfoContainer}>
              <View style={shpeInfoRow}>
                <Text style={infoLabel}>
                  {'Outreach Chair'}
                </Text>
              </View>
              <View style={shpeInfoRow}>
                <Avatar
                  rounded
                  xlarge
                  source={{uri: "https://www.shpeucf.com/wp-content/uploads/2014/06/SHPEofficer-2-150x150.jpg"}}
                  />
              </View>
              <Text style={contactStyle}>
                  {'Contact:  '}
                  <Text style={contactInfo}>
                  {'outreach.shpeucf@gmail.com'}
                </Text>
                </Text>
            </View>
          </Card>



        </ScrollView>
      </View>
    )
  }
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cardContainer: {
      marginRight: 5,
      marginLeft: 5,
      marginTop: 5,
      backgroundColor: '#2C3239',
    },
    shpeInfoContainer: {
      marginBottom: 10,
    },
    shpeInfoRow: {
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoLabel: {
     fontSize: 20,
     fontWeight: 'bold',
     alignItems: 'center',
     justifyContent: 'center',
     color: 'white'
    },
    infoValue: {
     fontSize: 15,
     fontWeight: 'normal',
     color: 'white'
    },
    signalInfoLabel: {
      marginBottom: 10,
      marginLeft: 10,
      color: 'white',
      fontWeight: 'bold',
    },
    titleColor: {
      color: '#FFC107'
    },

    contactStyle: {
      fontSize: 18, 
      fontWeight: "bold", 
      alignSelf: "center", 
      justifyContent: "center", 
      color: 'white'
    },

    contactInfo: {
      fontSize: 18,
      fontWeight: 'normal',
      alignSelf: "center",
      justifyContent: "center",
      color: '#FFC107',
      textDecorationLine: 'underline'
    },

  });

export { EBoard };
