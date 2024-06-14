import 'package:bookwise_web/constants/colors.dart';
import 'package:bookwise_web/constants/text_theme.dart';
import 'package:bookwise_web/firebase_options.dart';
import 'package:bookwise_web/pages/first_page.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:majestica_ds/majestica_ds.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.web,
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
