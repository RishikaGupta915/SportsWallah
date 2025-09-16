

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f2f2f2',
    flex: 1, // Make sure the view takes the full screen
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>SIH 2025</Text>
          <Text style={styles.subtitle}>AI Talent Assessment</Text>
        </View>

        {/* Camera View Placeholder */}
        <View style={styles.cameraContainer}>
          <Text style={styles.placeholderText}>Camera View Will Be Here</Text>
        </View>

        {/* Results Section */}
        <View style={styles.results}>
          <Text style={styles.resultsTitle}>RESULTS</Text>
          <View style={styles.resultsRow}>
            <Text style={styles.metricLabel}>Sit-ups:</Text>
            <Text style={styles.metricValue}>0</Text>
          </View>
          <View style={styles.resultsRow}>
            <Text style={styles.metricLabel}>Avg. Form Score:</Text>
            <Text style={styles.metricValue}>-</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#007bff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: '#6c757d',
    textAlign: 'center',
  },
  cameraContainer: {
    flex: 1, // This makes the camera view take up most of the space
    backgroundColor: '#000000',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  placeholderText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  results: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 8,
  },
  resultsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  metricLabel: {
    fontSize: 16,
    color: '#555',
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default App;
