import 'package:bookwise_web/constants/urls.dart';
import 'package:bookwise_web/gen/assets.gen.dart';
import 'package:bookwise_web/utils/url_launcher.dart';
import 'package:flutter/cupertino.dart';

import 'package:flutter_svg/flutter_svg.dart';

class DownloadButton extends StatelessWidget {
  final double? height;
  const DownloadButton({super.key, this.height});

  @override
  Widget build(BuildContext context) {
    return CupertinoButton(
      onPressed: () => UrlLauncherUtils.launchUrl(Urls.appLink),
      sizeStyle: CupertinoButtonSize.medium,
      minimumSize: const Size(0, 0),
      padding: EdgeInsets.zero,
      child: SvgPicture.asset(
        Assets.images.downloadButton,
        height: height,
      ),
    );
  }
}
