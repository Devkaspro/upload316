import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LinkIcon from '@mui/icons-material/Link';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SecurityIcon from '@mui/icons-material/Security';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

// Features Section Data
export const FEATURES_TITLE = "Features and Services";
export const features = [
    {
        id: 0,
        icon: <PhoneIphoneIcon />,
        tiitle: "iOS and Android App",
        description: "Upload-316 works for iOS 4+ and Android 2+ apps and devices: development, ad-hoc and in-house builds can be installed wirelessly with a single tap."
    },
    {
        id: 1,
        icon: <CloudUploadIcon />,
        tiitle: "Drag & Drop File Upload Support",
        description: "As a developer, simply drag&drop your ipa, zipped .app or apk into the field above and get a link to send to your testers/users/blogger/friends/…"
    },
    {
        id: 2,
        icon: <LinkIcon />,
        tiitle: "One tab app installation",
        description: "Using this link on their mobile device's browser, users will be able to download and install the app with just a single tap, nothing else"
    },
    {
        id: 3,
        icon: <SecurityIcon />,
        tiitle: "Privecy and protection",
        description: "Links are private: no search or index. They can be password protected and strictly respect Apple's security rules with UDIDs and provisioning profiles."
    },
    {
        id: 4,
        icon: <ThumbUpOutlinedIcon />,
        tiitle: "Simple tool for device compatibility",
        description: "Retrieving the UDID? Checking if the app is compatible with the users' device? Diawi provides simple tools to help with those boring tasks!"
    },
    {
        id: 5,
        icon: <LoyaltyOutlinedIcon />,
        tiitle: "Free to start, you'll love it",
        description: "Most of this is free on Diawi! But you may also get an account with a lot more features: see below…"
    }
];
export const COMPANY_PHONE_NUMBER = "Phone: +974-585-1234";
export const COMPANY_EMAIL_ADDRESS = "Email: support@upload316.com";
export const COMPANY_ADDRESS = "Address: PO Box 123, Mohali, India";

// Hear Upoad file constant
export const DRAG_DROP_TITLE = "Drag and drop files here Or";
export const CARD_TITLE = "Upload";
export const SELECT_BUTTON = "Select file";
