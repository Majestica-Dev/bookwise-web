import 'package:flutter/material.dart';
import 'package:majestica_ds/majestica_ds.dart';

class MainPage extends StatelessWidget {
  const MainPage({super.key});

  @override
  Widget build(BuildContext context) {
    final t = context.mdsTheme;

    return Scaffold(
      backgroundColor: t.colors.primaryHighContainer,
    );
  }
}
