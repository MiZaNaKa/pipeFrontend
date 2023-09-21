import React from 'react';

// import all the components we are going to use
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

// import pie to make pie chart
import Pie from 'react-native-pie';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Pie Chart Example</Text>
        <View
          style={{
            paddingVertical: 15,
            flexDirection: 'row',
            width: 350,
            justifyContent: 'space-between',
          }}
        >
          <Pie
            radius={80}
            sections={[
              {
                percentage: 10,
                color: '#C70039',
              },
              {
                percentage: 20,
                color: '#44CD40',
              },
              {
                percentage: 30,
                color: '#404FCD',
              },
              {
                percentage: 40,
                color: '#EBD22F',
              },
            ]}
            strokeCap={'butt'}
          />
          <Pie
            radius={80}
            innerRadius={50}
            sections={[
              {
                percentage: 10,
                color: '#C70039',
              },
              {
                percentage: 20,
                color: '#44CD40',
              },
              {
                percentage: 30,
                color: '#404FCD',
              },
              {
                percentage: 40,
                color: '#EBD22F',
              },
            ]}
            strokeCap={'butt'}
          />
        </View>
        <View
          style={{
            paddingVertical: 15,
            flexDirection: 'row',
            width: 350,
            justifyContent: 'space-between',
          }}
        >
          <Pie
            radius={80}
            innerRadius={60}
            sections={[
              {
                percentage: 10,
                color: '#C70039',
              },
              {
                percentage: 20,
                color: '#44CD40',
              },
              {
                percentage: 30,
                color: '#404FCD',
              },
              {
                percentage: 40,
                color: '#EBD22F',
              },
            ]}
            dividerSize={4}
            strokeCap={'round'}
          />
          <Pie
            radius={80}
            innerRadius={60}
            sections={[
              {
                percentage: 10,
                color: '#C70039',
              },
              {
                percentage: 20,
                color: '#44CD40',
              },
              {
                percentage: 30,
                color: '#404FCD',
              },
              {
                percentage: 40,
                color: '#EBD22F',
              },
            ]}
            dividerSize={6}
            strokeCap={'butt'}
          />
        </View>
        <View
          style={{
            paddingVertical: 15,
            width: 350,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Pie
            radius={80}
            sections={[
              {
                percentage: 10,
                color: '#C70039',
              },
              {
                percentage: 20,
                color: '#44CD40',
              },
              {
                percentage: 30,
                color: '#404FCD',
              },
              {
                percentage: 40,
                color: '#EBD22F',
              },
            ]}
            dividerSize={6}
            strokeCap={'butt'}
          />
          <View style={{ width: 175, alignItems: 'center' }}>
            <Pie
              radius={80}
              innerRadius={75}
              sections={[
                {
                  percentage: 60,
                  color: '#f00',
                },
              ]}
              backgroundColor="#ddd"
            />
            <View style={styles.gauge}>
              <Text style={styles.gaugeText}>
                60%
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  gauge: {
    position: 'absolute',
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});