import 'package:Bookwise/gen/fonts.gen.dart';
import 'package:majestica_ds/majestica_ds.dart';

abstract final class BSTextTheme {
  static final defaultTheme = MDSTextThemeData.defaultMDSThemeData.copyWith(
    headlineRegular:
        MDSTextThemeData.defaultMDSThemeData.headlineRegular.copyWith(
      fontFamily: FontFamily.newYork,
    ),
    headlineBold: MDSTextThemeData.defaultMDSThemeData.headlineBold.copyWith(
      fontFamily: FontFamily.newYork,
    ),
    title3Bold: MDSTextThemeData.defaultMDSThemeData.title3Bold.copyWith(
      fontFamily: FontFamily.newYork,
    ),
    title2Bold: MDSTextThemeData.defaultMDSThemeData.title2Bold.copyWith(
      fontFamily: FontFamily.newYork,
    ),
    title1Bold: MDSTextThemeData.defaultMDSThemeData.title1Bold.copyWith(
      fontFamily: FontFamily.newYork,
    ),
    titleLargeBold:
        MDSTextThemeData.defaultMDSThemeData.titleLargeBold.copyWith(
      fontFamily: FontFamily.newYork,
    ),
    titleLargeRegular:
        MDSTextThemeData.defaultMDSThemeData.titleLargeRegular.copyWith(
      fontFamily: FontFamily.newYork,
    ),
  );
}
