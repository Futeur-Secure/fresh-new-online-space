-- Clean up all existing FAQs and replace with FuteurVault-specific content
DELETE FROM vault_faqs;

-- Insert comprehensive FuteurVault-specific FAQs
INSERT INTO vault_faqs (question, answer, category, tags, popularity_score, is_verified) VALUES

-- Getting Started Category
('How do I set up my FuteurVault account?', 'Setting up FuteurVault is simple: 1) Download the app from your device''s app store, 2) Create an account with your email, 3) Set up your Master Password (make it strong and unique), 4) Complete the onboarding tutorial. FuteurVault will guide you through importing existing passwords and setting up your first secure vault.', 'Getting Started', ARRAY['setup', 'account', 'onboarding'], 95, true),

('Can I import passwords from other password managers into FuteurVault?', 'Yes! FuteurVault supports importing from most major password managers. Go to Settings > Import Data and select your previous password manager. We support CSV imports and direct imports from popular services. Your data is encrypted during the transfer process for maximum security.', 'Getting Started', ARRAY['import', 'migration', 'data transfer'], 90, true),

('How do I install FuteurVault on multiple devices?', 'Download FuteurVault from the App Store (iOS), Google Play (Android), or our website (desktop). Sign in with your account credentials on each device. Your vault will automatically sync across all devices using end-to-end encryption.', 'Getting Started', ARRAY['installation', 'multi-device', 'sync'], 88, true),

('What is the FuteurVault Master Password and why is it important?', 'Your Master Password is the key to your FuteurVault. It''s the only password you need to remember, as it unlocks all your stored passwords. Choose something strong but memorable - FuteurVault uses this to encrypt your entire vault with zero-knowledge architecture.', 'Getting Started', ARRAY['master password', 'security', 'encryption'], 92, true),

-- Security & Privacy Category
('How does FuteurVault encrypt my data?', 'FuteurVault uses military-grade AES-256 encryption with zero-knowledge architecture. This means your data is encrypted on your device before it reaches our servers. Even FuteurVault staff cannot see your passwords - only you have the encryption key.', 'Security & Privacy', ARRAY['encryption', 'zero-knowledge', 'privacy'], 98, true),

('What is zero-knowledge architecture in FuteurVault?', 'Zero-knowledge means FuteurVault never has access to your unencrypted data. Your Master Password creates encryption keys that only exist on your devices. Even if our servers were compromised, your data would remain encrypted and unreadable.', 'Security & Privacy', ARRAY['zero-knowledge', 'encryption', 'privacy'], 96, true),

('How secure is FuteurVault against data breaches?', 'FuteurVault is designed to be breach-proof. With zero-knowledge encryption, even if our servers were accessed, your data remains encrypted with keys only you possess. We also undergo regular security audits and use industry-leading security practices.', 'Security & Privacy', ARRAY['security', 'breach protection', 'audits'], 94, true),

('Does FuteurVault support two-factor authentication (2FA)?', 'Yes! FuteurVault supports multiple 2FA methods including TOTP apps (Google Authenticator, Authy), SMS, and hardware security keys like YubiKey. We recommend using TOTP or hardware keys for maximum security.', 'Security & Privacy', ARRAY['2FA', 'authentication', 'security keys'], 90, true),

-- Team Access Category
('How do I share passwords securely with my team in FuteurVault?', 'FuteurVault Teams allows secure password sharing with granular permissions. Create shared vaults for different teams or projects. You can control who can view, edit, or share specific passwords. All sharing maintains end-to-end encryption.', 'Team Access', ARRAY['sharing', 'teams', 'permissions'], 89, true),

('Can I set different permission levels for team members in FuteurVault?', 'Yes! FuteurVault offers role-based access control. Set team members as Viewers (read-only), Editors (can modify), or Admins (full access). You can also create custom permission sets for specific vaults or password collections.', 'Team Access', ARRAY['permissions', 'roles', 'access control'], 87, true),

('How do I invite team members to FuteurVault?', 'In the FuteurVault Teams dashboard, go to Team Management > Invite Members. Enter their email addresses and select their role. They''ll receive an invitation to join your FuteurVault organization with appropriate access levels.', 'Team Access', ARRAY['invitations', 'team management', 'onboarding'], 85, true),

('What happens when a team member leaves and I need to revoke their FuteurVault access?', 'Immediately remove the user from your FuteurVault Teams dashboard. Their access to all shared vaults is instantly revoked. For added security, consider rotating any passwords they had access to, especially for critical accounts.', 'Team Access', ARRAY['access revocation', 'offboarding', 'security'], 83, true),

-- Billing & Subscriptions Category
('What FuteurVault plans are available and what are the differences?', 'FuteurVault offers Personal ($2.99/month), Family ($4.99/month for 6 users), and Business plans (starting at $3/user/month). Personal includes unlimited passwords and devices. Family adds secure sharing. Business adds team management and advanced security features.', 'Billing & Subscriptions', ARRAY['plans', 'pricing', 'features'], 91, true),

('How do I upgrade my FuteurVault subscription?', 'Go to Account Settings > Subscription in your FuteurVault app or web dashboard. Select your desired plan and payment method. Upgrades take effect immediately, and you''ll only pay the prorated difference for the current billing period.', 'Billing & Subscriptions', ARRAY['upgrade', 'subscription', 'billing'], 88, true),

('Can I cancel my FuteurVault subscription anytime?', 'Yes, you can cancel anytime from Account Settings > Subscription. Your premium features will remain active until the end of your current billing period, then your account will revert to the free tier with basic functionality.', 'Billing & Subscriptions', ARRAY['cancellation', 'refund', 'downgrade'], 86, true),

('Does FuteurVault offer a free trial?', 'Yes! New users get a 14-day free trial of FuteurVault Premium with full access to all features. No credit card required to start. After the trial, you can choose to upgrade or continue with our free tier.', 'Billing & Subscriptions', ARRAY['free trial', 'premium features', 'no credit card'], 89, true),

-- Integrations Category
('Does FuteurVault work with web browsers?', 'Yes! FuteurVault offers browser extensions for Chrome, Firefox, Safari, and Edge. The extension auto-fills passwords, suggests strong passwords for new accounts, and can detect when you''re using weak or reused passwords.', 'Integrations', ARRAY['browser extension', 'autofill', 'password detection'], 93, true),

('How does FuteurVault integrate with the FuteurSecure ecosystem?', 'FuteurVault seamlessly integrates with other FuteurSecure products. Your FuteurVault credentials can be used across FuteurSecure''s security suite, providing unified access management and enhanced security monitoring across all applications.', 'Integrations', ARRAY['futeursecure', 'ecosystem', 'unified access'], 91, true),

('Can I use FuteurVault with mobile apps for autofill?', 'Absolutely! FuteurVault integrates with iOS AutoFill and Android Autofill Service. Once enabled in your device settings, FuteurVault will appear as an option when logging into any app, making mobile password management seamless.', 'Integrations', ARRAY['mobile autofill', 'iOS', 'Android'], 88, true),

('Does FuteurVault support API access for developers?', 'Yes, FuteurVault Business plans include API access for custom integrations. Developers can securely integrate FuteurVault into existing workflows while maintaining zero-knowledge encryption and security standards.', 'Integrations', ARRAY['API', 'developers', 'custom integration'], 82, true),

-- Advanced Features Category
('How does FuteurVault''s password health report work?', 'FuteurVault continuously monitors your passwords for security issues. The health report identifies weak, reused, or compromised passwords and provides actionable recommendations. It also checks against known data breach databases to alert you of compromised credentials.', 'Advanced Features', ARRAY['password health', 'security monitoring', 'breach detection'], 87, true),

('Can FuteurVault generate secure passwords automatically?', 'Yes! FuteurVault''s built-in password generator creates cryptographically secure passwords. Customize length, character types, and complexity. The generator can create passwords, passphrases, or even pronounceable passwords while maintaining high entropy.', 'Advanced Features', ARRAY['password generator', 'secure passwords', 'customization'], 90, true),

('What are FuteurVault''s emergency access features?', 'Emergency Access allows trusted contacts to request access to your vault if something happens to you. You set a waiting period (24-365 days) - if you don''t deny the request within that time, they gain access. This ensures your digital legacy is protected.', 'Advanced Features', ARRAY['emergency access', 'digital legacy', 'trusted contacts'], 84, true),

('How does FuteurVault handle offline access?', 'FuteurVault caches your vault data locally for offline access. You can view and use stored passwords even without internet connection. Any changes made offline will sync automatically when you reconnect, ensuring seamless access anywhere.', 'Advanced Features', ARRAY['offline access', 'local caching', 'sync'], 86, true);