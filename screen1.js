import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { SvgXml } from 'react-native-svg';

// Import your SVG components
import AboutUsSvg from './components/about_us.svg';
import ExerciseSvg from './components/exercise.svg';
import LeftTreeSvg from './components/left_tree.svg';
import RightTreeSvg from './components/right_tree.svg';

const SportsWallahScreen = () => {
  const handleChooseExercise = () => {
    console.log('Choose Exercise pressed');
    // Navigate to exercise selection screen
  };

  const handleAboutUs = () => {
    console.log('About Us pressed');
    // Navigate to about us screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#87CEEB" barStyle="dark-content" />
      
      {/* Background with sky gradient */}
      <LinearGradient
        colors={['#E0F6FF', '#87CEEB', '#98E4D6']}
        style={styles.background}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Sports Wallah</Text>
          <Text style={styles.subtitle}>Fitness delivered Village to Village</Text>
        </View>

        {/* Trees - Left Side */}
        <View style={styles.leftTreeContainer}>
          <LeftTreeSvg width={80} height={120} />
        </View>

        {/* Trees - Right Side */}
        <View style={styles.rightTreeContainer}>
          <RightTreeSvg width={80} height={120} />
        </View>

        {/* Main Content Area */}
        <View style={styles.mainContent}>
          {/* Buttons Container */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
              style={styles.button} 
              onPress={handleChooseExercise}
              activeOpacity={0.8}
            >
              <View style={styles.buttonContainer}>
                <ExerciseSvg width={200} height={50} style={styles.buttonSvg} />
                <Text style={styles.buttonText}>Choose Exercise</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.button} 
              onPress={handleAboutUs}
              activeOpacity={0.8}
            >
              <View style={styles.buttonContainer}>
                <AboutUsSvg width={200} height={50} style={styles.buttonSvg} />
                <Text style={styles.buttonText}>About Us</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Exercise Characters */}
          <View style={styles.charactersContainer}>
            {/* Character doing sit-ups */}
            <View style={styles.characterSitups}>
              <View style={styles.character}>
                <View style={styles.characterHead} />
                <View style={styles.characterBody} />
                <View style={styles.characterLegs} />
              </View>
            </View>

            {/* Character running/walking - Left */}
            <View style={styles.characterLeft}>
              <View style={styles.character}>
                <View style={styles.characterHead} />
                <View style={styles.characterBody} />
                <View style={styles.characterLegs} />
              </View>
            </View>

            {/* Character lunging - Right */}
            <View style={styles.characterRight}>
              <View style={styles.character}>
                <View style={styles.characterHead} />
                <View style={styles.characterBody} />
                <View style={styles.characterLegs} />
              </View>
            </View>
          </View>
        </View>

        {/* Ground/Grass Area */}
        <View style={styles.ground} />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    position: 'relative',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    zIndex: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#34495E',
    textAlign: 'center',
  },
  
  // Tree Containers
  leftTreeContainer: {
    position: 'absolute',
    left: 10,
    top: 120,
    zIndex: 1,
  },
  rightTreeContainer: {
    position: 'absolute',
    right: 10,
    top: 120,
    zIndex: 1,
  },
  treePlaceholder: {
    width: 80,
    height: 120,
    backgroundColor: '#7CB342',
    borderRadius: 40,
  },
  
  // Main Content
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    zIndex: 5,
  },
  
  // Buttons
  buttonsContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    marginBottom: 20,
    width: 200,
    height: 50,
  },
  buttonContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    zIndex: 1,
  },
  
  // Characters
  charactersContainer: {
    width: '100%',
    height: 150,
    position: 'relative',
  },
  characterSitups: {
    position: 'absolute',
    top: 10,
    left: '50%',
    marginLeft: -30,
  },
  characterLeft: {
    position: 'absolute',
    bottom: 20,
    left: 40,
  },
  characterRight: {
    position: 'absolute',
    bottom: 20,
    right: 40,
  },
  
  // Character styling (placeholder)
  character: {
    alignItems: 'center',
  },
  characterHead: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#F4A261',
    marginBottom: 5,
  },
  characterBody: {
    width: 20,
    height: 30,
    backgroundColor: '#264653',
    borderRadius: 10,
    marginBottom: 5,
  },
  characterLegs: {
    width: 15,
    height: 25,
    backgroundColor: '#E76F51',
    borderRadius: 7.5,
  },
  
  // Ground
  ground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#8BC34A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default SportsWallahScreen;