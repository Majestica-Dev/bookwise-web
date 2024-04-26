import 'package:flutter/painting.dart';
import 'package:majestica_ds/majestica_ds.dart';

abstract final class BSColors {
  static final MDSColors light = MDSColors.light(
    background: const Color(0xffF3ECE2),
    surface: const Color(0xffEEE4D9),
    highContainerContent: const Color(0xffffffff),
    primary: const Color(0xffD4472B),
    neutral: const Color(0xff1F1C1B),
  );

  static final MDSColors glossy = MDSColors.dark(
    background: const Color(0xff231F1D),
    surface: const Color(0xff1F1C1B),
    highContainerContent: const Color(0xff1F1C1B),
    primary: const Color(0xffFFFFFF),
    neutral: const Color(0xffFFFFFF),
  );
}
