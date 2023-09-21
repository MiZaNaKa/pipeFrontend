import React, { useState, useEffect } from "react";
import { View, Button, Text, ScrollView, } from 'react-native';
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

const TestAds = ({ navigation }) => {
  useEffect(() => {
    let interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {

        requestNonPersonalizedAdsOnly: true,
        keywords: ['fashion', 'clothing'],
    });
    interstitial.addAdEventListener(AdEventType.LOADED, () => {
        interstitial.show();
    });
    interstitial.load();
    return () => {
        interstitialListener = null;
    };
}, []);
 
  return (
    <ScrollView>
        <View>
            <View style={{ marginTop: 20 }}>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Text>
            </View>
        </View>
    </ScrollView>
  )

}
export default TestAds