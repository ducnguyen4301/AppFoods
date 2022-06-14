import {Block, FormContainer, HeaderTitle, Image, Text} from '@components';
import {useTheme} from '@theme';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoginOTP} from '@components/Auth';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {loginPhone} from '@store/sagas/auth/slice';
import localImages from '@assets';
import {CustomIcon} from '@assets/icons';
import {useTranslation} from 'react-i18next';
const LoginPhone = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {Colors} = useTheme();
  const dispatch = useDispatch();
  const _loginAccount = (values: {phoneNumber: number}) => {
    dispatch(loginPhone(values));
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <HeaderTitle
        headerLeft={
          <Block row align="center" justify="center">
            <Block padding={{right: 10}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <CustomIcon
                  name="chevron-left"
                  size={20}
                  color={Colors.orangeJuice}
                />
              </TouchableOpacity>
            </Block>
            <Text size={20}>{t('Đăng nhập hoặc đăng ký')}</Text>
          </Block>
        }
      />
      <FormContainer>
        <Block flex>
          <Block margin={{vertical: 26, top: 30}} align="center">
            <Image source={localImages().logo} width={60} height={60} />
          </Block>
          <LoginOTP onSubmit={_loginAccount} />
          <Block align="center" row margin={{top: 25}} justify="center">
            <Text color="secondaryText" style={styles.orText}>
              ----------------------
            </Text>
            <Text color="secondaryText" fontType="demiBold">
              HOẶC
            </Text>
            <Text color="secondaryText" style={styles.orText}>
              ----------------------
            </Text>
          </Block>
          <Block align="center" row margin={{top: 25}} justify="center">
            <TouchableOpacity style={styles.loginOtherGG}>
              <Text style={styles.loginOtherText}>Dang nhap voi Google</Text>
            </TouchableOpacity>
          </Block>
          <Block align="center" row margin={{top: 20}} justify="center">
            <TouchableOpacity style={styles.loginOtherFB}>
              <Text style={styles.loginOtherText}>Dang nhap voi FaceBook</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </FormContainer>
    </SafeAreaView>
  );
};

export default LoginPhone;
