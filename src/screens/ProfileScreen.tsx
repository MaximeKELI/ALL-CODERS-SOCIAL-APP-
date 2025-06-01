import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

const ProfileScreen = () => {
  const profile = {
    name: 'John Doe',
    title: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    avatar: 'https://example.com/avatar.jpg',
    coverPhoto: 'https://example.com/cover.jpg',
    about: 'Passionate software engineer with 5+ years of experience in full-stack development.',
    skills: [
      { id: '1', name: 'React Native', level: 'Expert' },
      { id: '2', name: 'TypeScript', level: 'Advanced' },
      { id: '3', name: 'Node.js', level: 'Advanced' },
      { id: '4', name: 'Python', level: 'Intermediate' },
    ] as Skill[],
    experience: [
      {
        id: '1',
        title: 'Senior Software Engineer',
        company: 'Tech Corp',
        period: '2020 - Present',
        description: 'Leading mobile app development team and implementing new features.',
      },
      {
        id: '2',
        title: 'Software Engineer',
        company: 'StartUp Inc',
        period: '2018 - 2020',
        description: 'Developed and maintained web applications using React and Node.js.',
      },
    ] as Experience[],
  };

  const renderSkill = (skill: Skill) => (
    <View key={skill.id} style={styles.skillContainer}>
      <Text style={styles.skillName}>{skill.name}</Text>
      <Text style={styles.skillLevel}>{skill.level}</Text>
    </View>
  );

  const renderExperience = (exp: Experience) => (
    <View key={exp.id} style={styles.experienceContainer}>
      <Text style={styles.experienceTitle}>{exp.title}</Text>
      <Text style={styles.experienceCompany}>{exp.company}</Text>
      <Text style={styles.experiencePeriod}>{exp.period}</Text>
      <Text style={styles.experienceDescription}>{exp.description}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: profile.coverPhoto }} style={styles.coverPhoto} />
        <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
          <Text style={styles.location}>{profile.location}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.about}>{profile.about}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        {profile.skills.map(renderSkill)}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {profile.experience.map(renderExperience)}
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
    marginBottom: 60,
  },
  coverPhoto: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    position: 'absolute',
    bottom: -60,
    left: (Dimensions.get('window').width - 120) / 2,
    borderWidth: 4,
    borderColor: '#fff',
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 70,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: '#666',
    marginTop: 4,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  about: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  skillContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  skillName: {
    fontSize: 16,
  },
  skillLevel: {
    fontSize: 14,
    color: '#666',
  },
  experienceContainer: {
    marginBottom: 16,
  },
  experienceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  experienceCompany: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  experiencePeriod: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  experienceDescription: {
    fontSize: 16,
    color: '#333',
    marginTop: 8,
  },
  editButton: {
    backgroundColor: '#007AFF',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen; 