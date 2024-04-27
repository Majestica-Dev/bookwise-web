import 'package:firebase_analytics/firebase_analytics.dart';

abstract class FirebaseAnalyticsLogger {
  static final FirebaseAnalytics analytics = FirebaseAnalytics.instance;

  static Future<void> _logEvent({
    required String name,
    Map<String, Object?>? parameters,
  }) async {
    return analytics.logEvent(
      name: name,
      parameters: parameters,
    );
  }

  static Future<void> logOnboardingIntroEntered() async {
    await _logEvent(
      name: 'onboarding_intro_opened',
    );
  }
}
