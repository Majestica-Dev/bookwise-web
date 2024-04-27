import 'package:Bookwise/constants/colors.dart';
import 'package:Bookwise/constants/text_theme.dart';
import 'package:Bookwise/firebase_options.dart';
import 'package:Bookwise/pages/first_page.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:majestica_ds/majestica_ds.dart';

void main() async {
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MDSTheme(
      data: MDSThemeData(
        colors: BSColors.light,
        textTheme: BSTextTheme.defaultTheme,
      ),
      child: const MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Bookwise',
        home: FirstPage(),
      ),
    );
  }
}
