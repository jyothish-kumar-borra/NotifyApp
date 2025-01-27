import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Navbar */}
        <View style={styles.navbar}>
          <Text style={styles.logo}>Notify</Text>
          <View style={styles.notificationIcon}>
            <Ionicons name="notifications" size={24} color="#666" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome, John Doe</Text>
          <View style={styles.trendingSection}>
            <Text style={styles.trendingText}>Trending Now</Text>
            <Ionicons name="flame" size={20} color="#FFA500" />
          </View>
          <View style={styles.announcementBox}>
            <Text style={styles.announcementText}>
              New Computer Science exam dates announced for Spring 2024!
            </Text>
          </View>
        </View>

        {/* Cards Section */}
        <View style={styles.cardsSection}>
          <Card icon="clipboard" title="Exam Notifications" color="#3B82F6" />
          <Card icon="trophy" title="Sports Selections" color="#F59E0B" />
          <Card icon="map" title="Roadmaps" color="#10B981" />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="home-outline" size={28} color="black" />
        <Ionicons name="search-outline" size={28} color="black" />
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={28} color="white" />
        </TouchableOpacity>
        <Ionicons name="bookmark-outline" size={28} color="black" />
        <Ionicons name="person-outline" size={28} color="black" />
      </View>
    </SafeAreaView>
  );
};

const Card = ({ icon, title, color }: { icon: any; title: string; color: string }) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.cardContent}>
      <Ionicons name={icon as any} size={24} color={color} />
      <Text style={styles.cardText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  notificationIcon: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
  },
  welcomeSection: {
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
  },
  trendingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  trendingText: {
    fontSize: 14,
    color: '#666',
    marginRight: 4,
  },
  announcementBox: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#E9D5FF',
    borderRadius: 8,
  },
  announcementText: {
    fontSize: 16,
    color: '#666',
  },
  cardsSection: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  cardText: {
    fontSize: 16,
    marginLeft: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  addButton: {
    backgroundColor: '#4A90E2',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
});