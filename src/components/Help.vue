<script setup lang="ts"></script>

<template>
  <div class="container mx-auto px-6 sm:px-8 py-12 sm:py-16">
    <!-- Document Title (excluded from opacity-70) -->
    <h1 class="text-3xl font-bold mb-6 text-center">Help & Support for Efficiver</h1>

    <!-- Section 1: Getting Started -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Getting Started</h2>
      <div class="opacity-80">
        <p>
          Welcome to Efficiver! Follow the onboarding process to set up your personalized
          eco-driving experience.
        </p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Onboarding Steps</h3>
        <ol class="list-decimal pl-6">
          <li><strong>Welcome:</strong> Introduction to Efficiver's features</li>
          <li>
            <strong>Permissions:</strong> <em>Required:</em> Grant location access for GPS tracking
            - essential for app functionality
          </li>
          <li>
            <strong>Vehicle Setup:</strong> Configure your vehicle type, engine size, and
            transmission
          </li>
          <li>
            <strong>Driving Experience:</strong> Set your proficiency level (1-5) for personalized
            tips
          </li>
          <li><strong>Hands-Free Driving:</strong> Learn about automatic drive detection</li>
          <li><strong>Smart Engine Detection:</strong> Discover idle stop detection technology</li>
          <li><strong>All Set:</strong> Complete setup and start driving efficiently</li>
        </ol>
      </div>
    </section>

    <!-- Section 2: How Efficiver Works -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">How Efficiver Works</h2>
      <div class="opacity-80">
        <p>
          Efficiver uses your phone's built-in sensors to track your driving and give instant tips
          to save fuel.
        </p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Key Features</h3>
        <ul class="list-disc pl-6">
          <li>
            <strong>Automatic Engine Detection:</strong> Identifies your vehicle using vibration
            patterns (like a unique 'fingerprint' from your car's engine shakes) - no OBD dongle
            needed (a plug-in device for your car)
          </li>
          <li>
            <strong>Real-time Efficiency Scoring:</strong> Live percentage score showing your
            eco-driving performance
          </li>
          <li>
            <strong>Voice Guidance:</strong> Audio feedback in multiple languages to help you drive
            better
          </li>
          <li>
            <strong>Auto Start/Stop:</strong> Automatically begins and ends drives when you
            start/stop moving
          </li>
          <li>
            <strong>Mistake Detection:</strong> Tracks harsh acceleration, braking, and excessive
            idling
          </li>
          <li>
            <strong>Gear Recommendations:</strong> Suggests optimal gear changes for manual
            transmissions
          </li>
          <li>
            <strong>Session History:</strong> Detailed analytics of your driving sessions and
            improvements
          </li>
          <li>
            <strong>Offline Operation:</strong> Works offline with GPS signal, all data stays on
            your phone
          </li>
        </ul>
      </div>
    </section>

    <!-- Section 3: Driving Interface -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Driving Interface</h2>
      <div class="opacity-80">
        <p>The main driving screen displays essential information to help you drive efficiently.</p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Main Gauge</h3>
        <ul class="list-disc pl-6">
          <li><strong>Speed Display:</strong> Your current speed with efficiency color coding</li>
          <li>
            <strong>Efficiency Score:</strong> Real-time percentage showing driving efficiency
          </li>
          <li><strong>Altitude:</strong> Current elevation (affects fuel consumption)</li>
          <li><strong>Temperature:</strong> Weather temperature (optional, requires location)</li>
          <li><strong>GPS Status:</strong> Signal strength indicator</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Metrics Section</h3>
        <ul class="list-disc pl-6">
          <li><strong>Distance:</strong> Total distance traveled in current session</li>
          <li><strong>Elevation Change:</strong> Total altitude gained/lost</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Mistakes Counter</h3>
        <ul class="list-disc pl-6">
          <li><strong>Acceleration Mistakes:</strong> Count of harsh accelerations</li>
          <li><strong>Braking Mistakes:</strong> Count of harsh braking events</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Gear & Idle Section</h3>
        <ul class="list-disc pl-6">
          <li><strong>Current Gear:</strong> Recommended gear for manual transmissions</li>
          <li><strong>Idle Time:</strong> Total time spent idling with engine on</li>
          <li><strong>Engine Status:</strong> Whether engine is detected as running</li>
        </ul>
      </div>
    </section>

    <!-- Section 4: Eco-Driving Tips -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Eco-Driving Tips</h2>
      <div class="opacity-80">
        <h3 class="text-xl font-semibold mt-4 mb-2">General Efficiency Tips</h3>
        <ul class="list-disc pl-6">
          <li>Maintain steady speeds and avoid rapid acceleration</li>
          <li>
            Anticipate traffic flow and brake gently - for example, coasting to a stoplight instead
            of braking hard can boost your score
          </li>
          <li>
            Avoid quick starts from traffic lights – gentle acceleration saves fuel and raises your
            score
          </li>
          <li>Use appropriate gears for your speed (manual transmission)</li>
          <li>Minimize idling time - turn off engine when stopped for more than 10 seconds</li>
          <li>Keep tires properly inflated and vehicle well-maintained</li>
          <li>Reduce unnecessary weight in your vehicle</li>
          <li>Plan routes to avoid heavy traffic when possible</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Understanding Your Score</h3>
        <ul class="list-disc pl-6">
          <li><strong>80-100%:</strong> Excellent eco-driving</li>
          <li><strong>60-79%:</strong> Good performance with room for improvement</li>
          <li><strong>40-59%:</strong> Moderate efficiency, focus on reducing mistakes</li>
          <li><strong>0-39%:</strong> Significant improvement needed</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Vehicle-Specific Tips</h3>
        <ul class="list-disc pl-6">
          <li>
            <strong>Petrol/Diesel:</strong> Focus on smooth acceleration and optimal gear usage
          </li>
          <li><strong>Electric:</strong> Maintain steady speeds to optimize battery range</li>
          <li>
            <strong>Manual Transmission:</strong> Use higher gears at lower speeds when appropriate
          </li>
          <li><strong>Automatic Transmission:</strong> Allow transmission to shift naturally</li>
        </ul>
      </div>
    </section>

    <!-- Section 5: Troubleshooting -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Troubleshooting</h2>
      <div class="opacity-80">
        <p>If something isn't working right, try these common fixes first.</p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Common Issues</h3>
        <dl class="space-y-4">
          <dt class="font-semibold">App not detecting drives automatically</dt>
          <dd>
            Ensure "Auto Start Drive" and "Auto Stop Drive" are enabled in Settings > Driving
            Preferences. Grant Motion & Fitness permission in iOS Settings > Privacy & Security.
          </dd>

          <dt class="font-semibold">Engine not detected properly</dt>
          <dd>
            Drive at highway speeds for initial calibration. Ensure phone is securely mounted. The
            app learns your engine's vibration pattern during the first drive.
          </dd>

          <dt class="font-semibold">No voice feedback</dt>
          <dd>
            Check Settings > Voice Preferences > Voice Assistance is enabled. Verify device volume
            and Do Not Disturb settings. Try changing voice language.
          </dd>

          <dt class="font-semibold">GPS signal weak or unavailable</dt>
          <dd>
            GPS is <em>required</em> for Efficiver to function. Ensure location permissions are
            granted and GPS is enabled. Drive to an area with better GPS reception - the app cannot
            provide efficiency feedback without GPS signal.
          </dd>

          <dt class="font-semibold">High battery usage</dt>
          <dd>
            Enable "Prioritise Low Power" in Settings > App Preferences. Disable Apple Maps if not
            needed. Auto-start/stop features increase battery usage.
          </dd>

          <dt class="font-semibold">Incorrect vehicle parameters</dt>
          <dd>
            Go to Settings > Vehicle Parameters and update engine size, fuel type, and transmission
            settings to match your actual vehicle.
          </dd>

          <dt class="font-semibold">App not responding or crashing</dt>
          <dd>
            Force quit and restart the app. Check for iOS updates. If issues persist, reset app
            settings or reinstall.
          </dd>
        </dl>
      </div>
    </section>

    <!-- Section 6: Settings Guide -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Settings & Customization</h2>
      <div class="opacity-80">
        <h3 class="text-xl font-semibold mt-4 mb-2">User Mode</h3>
        <ul class="list-disc pl-6">
          <li><strong>Technical:</strong> Detailed vehicle settings and advanced options</li>
          <li><strong>Non-Technical:</strong> Simplified interface with guided explanations</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Vehicle Parameters</h3>
        <ul class="list-disc pl-6">
          <li><strong>Fuel Type:</strong> Petrol, Diesel, or Electric</li>
          <li><strong>Engine Size:</strong> Capacity in cc (petrol/diesel) or kW (electric)</li>
          <li><strong>Transmission:</strong> Manual or Automatic</li>
          <li><strong>Turbocharged:</strong> Enable for turbo engines</li>
          <li><strong>Number of Gears:</strong> For manual transmissions (4-8 gears)</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Driving Preferences</h3>
        <ul class="list-disc pl-6">
          <li>
            <strong>Proficiency Level:</strong> 1-5 scale (1=Beginner, 5=Expert) - adjusts feedback
            sensitivity
          </li>
          <li>
            <strong>Auto Start Drive:</strong> Automatically begin tracking when vehicle moves
          </li>
          <li><strong>Auto Stop Drive:</strong> Automatically end tracking when vehicle stops</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Voice Preferences</h3>
        <ul class="list-disc pl-6">
          <li><strong>Voice Assistance:</strong> Enable/disable audio feedback</li>
          <li><strong>Language:</strong> Choose from available voice languages</li>
          <li><strong>Voice Volume:</strong> Adjust feedback loudness</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">App Preferences</h3>
        <ul class="list-disc pl-6">
          <li><strong>Units:</strong> Kilometers/Miles or Liters/Gallons</li>
          <li><strong>Prioritise Low Power:</strong> Battery-saving mode</li>
          <li><strong>Apple Maps:</strong> Enable map integration (increases battery usage)</li>
          <li><strong>Temperature in Gauge:</strong> Show weather temperature</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Security</h3>
        <ul class="list-disc pl-6">
          <li><strong>Biometric Lock:</strong> Face ID/Touch ID protection</li>
        </ul>
      </div>
    </section>

    <!-- Section 7: Session History -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Session History & Analytics</h2>
      <div class="opacity-80">
        <p>Track your driving improvement over time with detailed session analytics.</p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Session Details</h3>
        <ul class="list-disc pl-6">
          <li><strong>Efficiency Score:</strong> Overall session performance</li>
          <li><strong>Distance:</strong> Total kilometers/miles driven</li>
          <li><strong>Duration:</strong> Total time of the driving session</li>
          <li><strong>Mistakes:</strong> Breakdown of acceleration, braking, and idle errors</li>
          <li><strong>Fuel Savings:</strong> Estimated fuel/electricity saved</li>
          <li><strong>Environmental Impact:</strong> CO2 emissions avoided</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Analytics Features</h3>
        <ul class="list-disc pl-6">
          <li><strong>Average Score Card:</strong> Overall performance across all sessions</li>
          <li><strong>Session Comparison:</strong> Track improvement over time</li>
          <li><strong>Detailed Breakdown:</strong> Per-session analysis with timestamps</li>
          <li><strong>Export Options:</strong> Share session data (coming soon)</li>
        </ul>
      </div>
    </section>

    <!-- Section 8: Privacy & Data -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Privacy & Data Security</h2>
      <div class="opacity-80">
        <p>
          Efficiver is designed with privacy-first principles. All your driving data stays on your
          phone.
        </p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Data Storage</h3>
        <ul class="list-disc pl-6">
          <li><strong>Local Only:</strong> No data is transmitted to servers</li>
          <li><strong>Session History:</strong> Stored securely on your phone</li>
          <li><strong>Settings:</strong> Personal preferences saved locally</li>
          <li><strong>Vehicle Data:</strong> Configuration stored privately</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Permissions</h3>
        <ul class="list-disc pl-6">
          <li>
            <strong>Location:</strong> <em>Required</em> for GPS tracking and all efficiency
            calculations - the app cannot function without GPS
          </li>
          <li><strong>Motion & Fitness:</strong> Used for auto-start/stop and engine detection</li>
          <li>
            <strong>Speech Recognition:</strong> Optional, for voice commands (future feature)
          </li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Data Deletion</h3>
        <ul class="list-disc pl-6">
          <li>Delete individual sessions from history</li>
          <li>Reset all settings to defaults</li>
          <li>Uninstall app to remove all data</li>
        </ul>
      </div>
    </section>

    <!-- Section 9: Support & Contact -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Support & Contact</h2>
      <div class="opacity-80">
        <p>Need help? We're here to assist you with your eco-driving journey.</p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Contact Information</h3>
        <ul class="list-disc pl-6">
          <li><strong>Email:</strong> contact@efficiver.com</li>
          <li><strong>Website:</strong> www.efficiver.com</li>
          <li><strong>Response Time:</strong> We aim to respond as soon as possible</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Before Contacting Support</h3>
        <ul class="list-disc pl-6">
          <li>Check this help page for solutions to common issues</li>
          <li>Ensure your app is updated to the latest version</li>
          <li>Note your iOS version and phone model</li>
          <li>Include screenshots if describing visual issues</li>
          <li>Describe the problem with specific steps to reproduce</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">FAQ</h3>
        <dl class="space-y-4">
          <dt class="font-semibold">Does Efficiver work with all vehicles?</dt>
          <dd>
            Yes! Efficiver works with petrol, diesel, hybrid, and electric vehicles of all makes and
            models.
          </dd>

          <dt class="font-semibold">Is Efficiver free?</dt>
          <dd>
            Basic features are free. Premium features may be available through future subscription
            plans.
          </dd>

          <dt class="font-semibold">Does Efficiver require internet?</dt>
          <dd>No, Efficiver works completely offline using only your phone's sensors.</dd>

          <dt class="font-semibold">How accurate is the efficiency scoring?</dt>
          <dd>
            The scoring is based on real driving physics and is calibrated for accuracy, though
            individual results may vary based on vehicle condition and driving conditions.
          </dd>

          <dt class="font-semibold">Can I use Efficiver while driving?</dt>
          <dd>
            Yes, but focus on the road first. Efficiver is designed to provide audio feedback so you
            don't need to look at your phone while driving.
          </dd>
        </dl>
      </div>
    </section>

    <!-- Section 10: Updates & Changes -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Updates & What's New</h2>
      <div class="opacity-80">
        <p>
          We regularly update Efficiver with new features and improvements. Check the App Store for
          updates.
        </p>
        <h3 class="text-xl font-semibold mt-4 mb-2">Recent Improvements</h3>
        <ul class="list-disc pl-6">
          <li>Enhanced engine detection algorithms for better accuracy</li>
          <li>Improved voice feedback system with multiple languages</li>
          <li>Advanced auto-start/stop functionality</li>
          <li>Better battery optimization and low-power mode</li>
          <li>Expanded session analytics and history tracking</li>
          <li>Weather integration for temperature display</li>
          <li>Apple Maps integration for navigation</li>
          <li>Biometric security features</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4 mb-2">Coming Soon</h3>
        <ul class="list-disc pl-6">
          <li>Apple Watch companion app</li>
          <li>Android version</li>
          <li>Advanced route planning</li>
          <li>Social features and leaderboards</li>
          <li>Detailed fuel cost savings reports</li>
        </ul>
        <p class="mt-4">Last updated: December 15, 2025</p>
      </div>
    </section>
  </div>
</template>
