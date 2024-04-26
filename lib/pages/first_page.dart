import 'package:bookwise_web/constants/colors.dart';
import 'package:bookwise_web/constants/urls.dart';
import 'package:bookwise_web/gen/assets.gen.dart';
import 'package:bookwise_web/utils/url_launcher.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:majestica_ds/majestica_ds.dart';

class FirstPage extends StatelessWidget {
  const FirstPage({super.key});

  @override
  Widget build(BuildContext context) {
    const widthbrakePoint = 500;
    final screenWidth = MediaQuery.of(context).size.width;

    final t = context.mdsTheme;

    return Scaffold(
      backgroundColor: t.colors.primaryHighContainer,
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        leading: Padding(
          padding: EdgeInsets.only(left: t.spacing.x2, top: t.spacing.x2),
          child: SvgPicture.asset(Assets.icons.appIconSvg),
        ),
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              SizedBox(height: t.spacing.x2),
              Text(
                'Read deeper',
                textAlign: TextAlign.center,
                style: t.textTheme.title3Bold
                    .copyWith(color: t.colors.allWhite, fontSize: 50),
              ),
              SizedBox(height: t.spacing.x05),
              Text(
                'Organize all your Books, Reduced Clutter',
                textAlign: TextAlign.center,
                style: t.textTheme.title3Bold.copyWith(
                  color: t.colors.allWhite,
                  fontWeight: FontWeight.w100,
                  fontSize: 30,
                ),
              ),
              SizedBox(height: t.spacing.x6),
              MDSTheme(
                data: t.copyWith(colors: BSColors.glossy),
                child: MouseRegion(
                  cursor: MaterialStateMouseCursor.clickable,
                  child: PrimaryButton(
                    buttonSize: MDSButtonSize.L,
                    onPressed: () {
                      UrlLauncherUtils.launchUrl(Urls.appLink);
                    },
                    text: 'Download Free on iOS',
                  ),
                ),
              ),
              SizedBox(height: t.spacing.x8),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: t.spacing.x4),
                child: Image.asset(
                  width: screenWidth > widthbrakePoint ? 433 : null,
                  height: screenWidth > widthbrakePoint ? 883 : null,
                  Assets.images.appIlustration.path,
                ),
              ),
              SizedBox(height: t.spacing.x3)
            ],
          ),
        ),
      ),
    );
  }
}
