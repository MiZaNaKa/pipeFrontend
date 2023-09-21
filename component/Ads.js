import React, {  useEffect, useState,useRef} from 'react';
import { GAMBannerAd, BannerAdSize, TestIds,InterstitialAd,AdEventType,AppOpenAd,RewardedAd } from 'react-native-google-mobile-ads'; 
import { View, Text,Dimensions , TouchableOpacity,ScrollView,Platform,Linking,Image,Button} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);

function App(props) {
    // const appOpenAd = AppOpenAd.createForAdRequest(TestIds.APP_OPEN, {
    //     requestNonPersonalizedAdsOnly: true,
    //     keywords: ['fashion', 'clothing'],
    // });

    const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
        requestNonPersonalizedAdsOnly: true,
        keywords: ['fashion', 'clothing'],
    });

    useEffect(() => {
        interstitial.load();
        setTimeout(() => {
            interstitial.addAdEventListener(AdEventType.LOADED, () => {
                interstitial.show();
            });
            interstitial.load();
            return () => {
                interstitialListener = null;
            };
        }, 20000);
    }, []);
   
    // useEffect(() => {
    //     appOpenAd.load();
    //     setTimeout(() => {
    //         props.navigation.navigate('Login')
    //     // navigation.replace("Login");
    //     appOpenAd.show();
    //     }, 10000);
    // }, []);

    const rewarded = RewardedAd.createForAdRequest(TestIds.GAM_REWARDED, {
        requestNonPersonalizedAdsOnly: true,
        keywords: ['fashion', 'clothing'],
    });
      
    useEffect(() => {
    rewarded.load()
    }, []);

    

    



    return (
        <View style={{flex:1,padding:40}}>
            
            <Text>Ads testing </Text>

            <GAMBannerAd
                unitId={TestIds.BANNER}
                sizes={[BannerAdSize.FULL_BANNER]}
                requestOptions={{
                requestNonPersonalizedAdsOnly: true,
                }}
            />

            {/* <Button
                onPress={()=> rewarded.show()}
                title= "Display Rewarded Ads"
            /> */}
        </View>
    );
}

export default App

