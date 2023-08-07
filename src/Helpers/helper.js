import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinkIcon from '@mui/icons-material/Link';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SecurityIcon from '@mui/icons-material/Security';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

export const convertToMB = (value) => value / (1024 * 1024);

export const features = [
    {
        id: 0,
        icon: <PhoneIphoneIcon />,
        tiitle: "App for iOS and Android",
        description: "With Upload-316, wireless installation of development, ad-hoc, and internal builds is possible for iOS 4+ and Android 2+ apps and devices."
    },
    {
        id: 1,
        icon: <CloudUploadIcon />,
        tiitle: "File Upload Support with Drag & Drop",
        description: "Drag and drop your ipa, zipped.app, or apk into the form above to get a link that you can share with your testers, users, bloggers, friends, etc."
    },
    {
        id: 2,
        icon: <LinkIcon />,
        tiitle: "Installing an app in one tab",
        description: "Users will only need to hit this link on their mobile device's browser to download and install the app—no other action is required."
    },
    {
        id: 3,
        icon: <SecurityIcon />,
        tiitle: "Privacy and safety",
        description: "Links are private; there is no index or search. With UDIDs and provisioning profiles, they are absolutely compliant with Apple's security regulations and can be password-protected."
    },
    {
        id: 4,
        icon: <ThumbUpOutlinedIcon />,
        tiitle: "a straightforward device compatibility tool",
        description: "Getting the UDID back? checking to see if the user's device is compatible with the app? Simple tools are available from Upload316 to assist with those tedious activities!"
    },
    {
        id: 5,
        icon: <LoyaltyOutlinedIcon />,
        tiitle: "You'll adore it when it's free to start.",
        description: "On Upload316, the most of content is free! However, you might alternatively get a far more feature-rich account: view below.!"
    }
];

export const AboutiOS = [
    {
        id: 0,
        aboutTitle: "How app installation works",
        description: "Over-the-air installation of apps on iOS is based on tools and features provided officially by Apple: itms-service and a valid manifest file providing information on the app."
    },
    {
        id: 1,
        aboutTitle: "Compatibility",
        description: "Wireless installation of apps on iOS devices should work starting from iOS 4.0+ on all iPhones, iPads and iPod touches. Installation is only possible using Safari, no other standalone(Chrome, ...) or integrate browser(inside the Facebook app, ...) can initiate the installation process.",
    },
    {
        id: 2,
        aboutTitle: "Most common upload errors",
        description: "When an app package is uploaded to Diawi, wether .ipa or .zip(.app), the content is processed to validate some key elements needed for the installation. This page provides some insight on most common errors that this processing might produce"
    },
    {
        id: 3,
        aboutTitle: "Can't install an app on a device? Things to check",
        description: "Apple doesn't provide explicit error messages when installing apps on devices. It can be quite difficult to understand what could have gone wrong."
    },
    {
        id: 4,
        aboutTitle: "iOS9 changes and known issues",
        description: "Since iOS 9.0, Apple has changed the way in-house apps are authorized on the devices.Before, an app distributed with an in -house signature and mobileprovision could be installed and launched directly.At first launch of the app, an Untrusted Enterprise Developer will show.The app developer has to be trusted through the Settings of the device."
    },
    {
        id: 5,
        aboutTitle: "iOS8 changes and known issues",
        description: "Since iOS 8.x, Apple has changed the way the manifest is read by the device.Before, the device didn't check the bundle identifier in the manifest: the app installed could have a different identifier. Now, the bundle identifiers must match"
    },
    {
        id: 6,
        aboutTitle: "Getting more information with xcode's console",
        description: "Apple doesn't provide much information to the end user when the installation goes wrong. Often, error messages are generic ones like The application could not be downloaded. One way to get a little bit more information is to connect the device to a Mac with xcode,and look at the console."
    },
];
export const AboutAndroid = [
    {
        id: 0,
        aboutTitle: "How app installation works",
        description: "Android devices allow .apk file download and installation system-wide. Any browser that can start the download of a file may be used (default Browser or Chrome work well)."
    },
    {
        id: 1,
        aboutTitle: "Compatibility",
        description: "Wireless installation of apps on Android devices should work starting from Android 2.0+ on all smartphones or tablets.Known compatible web browsers are: Android Browser Chrome"
    },
    {
        id: 2,
        aboutTitle: "Can't install an app on a device? Things to check",
        description: "Apple doesn't provide explicit error messages when installing apps on devices. It can be quite difficult to understand what could have gone wrong."
    },
    {
        id: 3,
        aboutTitle: "Getting more information with logcat",
        description: "Android doesn't provide much information to the end user when the installation goes wrong. Often, error messages are generic ones like The application could not be downloaded"
    },
];
