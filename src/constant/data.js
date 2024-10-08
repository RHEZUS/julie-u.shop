import userImg from "@/assets/images/all-img/user.png";
import user2Img from "@/assets/images/all-img/user2.png";
import user3Img from "@/assets/images/all-img/user3.png";
import user4Img from "@/assets/images/all-img/user4.png";


export const menuItems = [
  {
    isHeadr: true,
    title: "menu",
  },
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/dashboard/home",
  },
  {
    title: 'Go To Website',
    icon: 'bi:box-arrow-up-right',
    link: '/',
  },
  {
    title: "Users",
    icon: "bi:person",
    link: "/dashboard/users",
  },
  {
    title: "Brands",
    icon: "bi:tags-fill",
    link: "/dashboard/brands",
  },
  {
    title: "Category",
    icon: "bi:card-list",
    link: "/dashboard/category",
  },
  {
    title: "Products",
    icon: "bi:basket2-fill",
    link: "#",
    child: [
      {
        childtitle: "List products",
        childlink: "/dashboard/products",
      },
      {
        childtitle: "create product",
        childlink: "/dashboard/product-create",
      },

    ],
  },
  {
    title: "Delivery Locations",
    icon: "bi:geo-alt-fill",
    link: "delivery-locations",
  },
  {
    title: "Orders",
    icon: "bi:cart4",
    link: "orders",
  },
  {
    title: "changelog",
    icon: "heroicons:arrow-trending-up",
    link: "changelog",
    badge: "2.0.1",
  },
  {
    isHeadr: true,
    title: "apps",
  },
  //{
  //  childtitle: "Update Product",
  //  childlink: "product-update",
  //},

  {
    title: "Chat",
    icon: "heroicons-outline:chat",
    link: "chat",
  },

  {
    title: "Email",
    icon: "heroicons-outline:mail",
    link: "email",
  },

  {
    title: "Kanban",
    icon: "heroicons-outline:view-boards",
    link: "kanban",
  },
  {
    title: "Calender",
    icon: "heroicons-outline:calendar",
    link: "calender",
  },

  {
    title: "Todo",
    icon: "heroicons-outline:clipboard-check",
    link: "todo",
  },

  {
    title: "Projects",
    icon: "heroicons-outline:document",
    link: "#",
    child: [
      {
        childtitle: "Projects",
        childlink: "projects",
      },
      {
        childtitle: "Project Details",
        childlink: "project-details",
      },
    ],
  },
  {
    title: "Ecommerce",
    icon: "heroicons-outline:shopping-cart",
    link: "#",
    child: [
      {
        childtitle: "Products",
        childlink: "/app/products",
      },

      {
        childtitle: "Cart",
        childlink: "/app/cart",
      },
      {
        childtitle: "Wishlist",
        childlink: "/app/wishlist",
      },

      {
        childtitle: "Add Product",
        childlink: "/app/add-product",
        badge: "soon",
      },
      {
        childtitle: "Edit Product",
        childlink: "/app/edit-product",
        badge: "soon",
      },
    ],
  },
  {
    isHeadr: true,
    title: "Pages",
  },
  {
    title: "Authentication",
    icon: "heroicons-outline:lock-closed",
    link: "#",
    child: [
      {
        childtitle: "Signin One",
        childlink: "/",
      },
      {
        childtitle: "Signin Two",
        childlink: "/login2",
      },
      {
        childtitle: "Signin Three",
        childlink: "/login3",
      },
      {
        childtitle: "Signup One",
        childlink: "/register",
      },
      {
        childtitle: "Signup Two",
        childlink: "/register2",
      },
      {
        childtitle: "Signup Three",
        childlink: "/register3",
      },
      {
        childtitle: "Forget Password One",
        childlink: "/forgot-password",
      },
      {
        childtitle: "Forget Password Two",
        childlink: "/forgot-password2",
      },
      {
        childtitle: "Forget Password Three",
        childlink: "/forgot-password3",
      },
      {
        childtitle: "Lock Screen One",
        childlink: "/lock-screen",
      },
      {
        childtitle: "Lock Screen Two",
        childlink: "/lock-screen2",
      },
      {
        childtitle: "Lock Screen Three",
        childlink: "/lock-screen3",
      },
    ],
  },
  {
    title: "Utility",
    icon: "heroicons-outline:view-boards",
    link: "#",
    child: [
      {
        childtitle: "Invoice",
        childlink: "invoice",
      },
      {
        childtitle: "Pricing",
        childlink: "pricing",
      },
      {
        childtitle: "Testimonial",
        childlink: "testimonial",
      },
      {
        childtitle: "FAQ",
        childlink: "faq",
      },
      {
        childtitle: "Blog",
        childlink: "blog",
      },

      {
        childtitle: "Blank Page",
        childlink: "blank-page",
      },
      
      {
        childtitle: "Profile",
        childlink: "profile",
      },
      {
        childtitle: "Settings",
        childlink: "settings",
      },
      {
        childtitle: "404 page",
        childlink: "/404",
      },
      {
        childtitle: "Coming Soon",
        childlink: "/coming-soon",
      },
      {
        childtitle: "Under Maintanance page",
        childlink: "/under-construction",
      },
    ],
  },

  {
    isHeadr: true,
    title: "Elements",
  },
  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "#",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
      },
    ],
  },
  {
    title: "Components",
    icon: "heroicons-outline:collection",
    link: "#",
    child: [
      {
        childtitle: "Typography",
        childlink: "typography",
      },
      {
        childtitle: "Colors",
        childlink: "colors",
      },
      {
        childtitle: "Alert",
        childlink: "alert",
      },
      {
        childtitle: "Button",
        childlink: "button",
      },
      {
        childtitle: "Card",
        childlink: "/app/card",
      },
      {
        childtitle: "Carousel",
        childlink: "carousel",
      },
      {
        childtitle: "Dropdown",
        childlink: "dropdown",
      },
      {
        childtitle: "Image",
        childlink: "image",
      },
      {
        childtitle: "Modal",
        childlink: "modal",
      },
      {
        childtitle: "Progress bar",
        childlink: "progress-bar",
      },
      {
        childtitle: "Placeholder",
        childlink: "placeholder",
      },
      {
        childtitle: "Tab & Accordion",
        childlink: "tab-accordion",
      },
      {
        childtitle: "Badge",
        childlink: "badges",
      },
      {
        childtitle: "Pagination",
        childlink: "Pagination",
      },
      {
        childtitle: "Video",
        childlink: "video",
      },
      {
        childtitle: "Tooltip & Popover",
        childlink: "tooltip-popover",
      },
    ],
  },
  {
    title: "Forms",
    icon: "heroicons-outline:clipboard-list",
    link: "#",
    child: [
      {
        childtitle: "Input",
        childlink: "input",
      },
      {
        childtitle: "Input group",
        childlink: "input-group",
      },
      {
        childtitle: "Input layout",
        childlink: "input-layout",
      },
      {
        childtitle: "Form validation",
        childlink: "form-validation",
      },
      {
        childtitle: "Wizard",
        childlink: "form-wizard",
      },
      {
        childtitle: "Input mask",
        childlink: "input-mask",
      },
      {
        childtitle: "File input",
        childlink: "file-input",
      },
      {
        childtitle: "Form repeater",
        childlink: "form-repeater",
      },
      {
        childtitle: "Textarea",
        childlink: "textarea",
      },
      {
        childtitle: "Checkbox",
        childlink: "checkbox",
      },
      {
        childtitle: "Radio button",
        childlink: "radio-button",
      },
      {
        childtitle: "Switch",
        childlink: "switch",
      },
      {
        childtitle: "Select & Vue select",
        childlink: "select",
      },
      {
        childtitle: "Date time picker",
        childlink: "date-time-picker",
      },
    ],
  },
  {
    title: "Tables",
    icon: "heroicons-outline:table",
    link: "#",
    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
      },
      {
        childtitle: "Advanced table",
        childlink: "table-advanced",
      },
    ],
  },
  {
    title: "Chart",
    icon: "heroicons-outline:chart-bar",
    link: "#",
    child: [
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
      },
    ],
  },
  {
    title: "Map",
    icon: "heroicons-outline:map",
    link: "map",
  },

  {
    title: "Icons",
    icon: "heroicons-outline:emoji-happy",
    link: "icons",
  },
];

// menuseetins

export const ProfileMenu = [
  {
    label: "Profile",
    icon: "heroicons-outline:user",
    link: "#",
  },
  {
    label: "Chat",
    icon: "heroicons-outline:chat",
    link: "chat",
  },
  {
    label: "Email",
    icon: "heroicons-outline:mail",
    link: "email",
  },
  {
    label: "Todo",
    icon: "heroicons-outline:chip",
    link: "todo",
  },
  {
    label: "Settings",
    icon: "heroicons-outline:cog",
    link: "#",
  },
  {
    label: "Price",
    icon: "heroicons-outline:credit-card",
    link: "pricing",
  },
  {
    label: "Faq",
    icon: "heroicons-outline:information-circle",
    link: "faq",
  },
  {
    label: "Logout",
    icon: "heroicons-outline:login",
    link: "/",
  },
];

export const notifications = [
  {
    title: "Your order is placed",
    desc: "Amet minim mollit non deser unt ullamco est sit aliqua.",
    image: userImg,
    link: "#",
  },
  {
    title: "Congratulations Darlene  🎉",
    desc: "Won the monthly best seller badge",
    unread: true,
    image: user2Img,
    link: "#",
  },
  {
    title: "Revised Order 👋",
    desc: "Won the monthly best seller badge",
    image: user3Img,
    link: "#",
  },
  {
    title: "Brooklyn Simmons",
    desc: "Added you to Top Secret Project group...",
    image: user4Img,
    link: "#",
  },
];

export const message = [
  {
    title: "Wade Warren",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: true,
    notification_count: 1,
    image: userImg,
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: user2Img,
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: user3Img,
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: user4Img,
    link: "#",
  },
  {
    title: "Savannah Nguyen",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: false,
    image: user2Img,
    link: "#",
  },
  {
    title: "Ralph Edwards",
    desc: "Hi! How are you doing?.....",
    active: false,
    hasnotifaction: true,
    notification_count: 8,
    image: user3Img,
    link: "#",
  },
  {
    title: "Cody Fisher",
    desc: "Hi! How are you doing?.....",
    active: true,
    hasnotifaction: false,
    image: user4Img,
    link: "#",
  },
];

export const topMenu = [
  {
    isHeadr: true,
    title: "DASHBOARD",
  },
  {
    title: "Dashboard",
    icon: "heroicons-outline:home",
    link: "/app/home",
    child: [
      {
        childtitle: "Analytics Dashboard",
        childlink: "home",
        childicon: "heroicons:presentation-chart-line",
      },
      {
        childtitle: "Ecommerce Dashboard",
        childlink: "ecommerce",
        childicon: "heroicons:shopping-cart",
      },
      {
        childtitle: "Project  Dashboard",
        childlink: "project",
        childicon: "heroicons:briefcase",
      },
      {
        childtitle: "CRM Dashboard",
        childlink: "crm",
        childicon: "ri:customer-service-2-fill",
      },
      {
        childtitle: "Banking Dashboard",
        childlink: "banking",
        childicon: "heroicons:wrench-screwdriver",
      },
    ],
  },
  {
    title: "App",
    icon: "heroicons-outline:chip",
    link: "/app/home",
    child: [
      {
        childtitle: "Calendar",
        childlink: "calender",
        childicon: "heroicons-outline:calendar",
      },
      {
        childtitle: "Kanban",
        childlink: "kanban",
        childicon: "heroicons-outline:view-boards",
      },
      {
        childtitle: "Todo",
        childlink: "todo",
        childicon: "heroicons-outline:clipboard-check",
      },
      {
        childtitle: "Projects",
        childlink: "projects",
        childicon: "heroicons-outline:document",
      },
    ],
  },
  {
    title: "Pages",
    icon: "heroicons-outline:view-boards",
    link: "/app/home",
    megamenu: [
      {
        megamenutitle: "Authentication",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Signin One",
            m_childlink: "/",
          },
          {
            m_childtitle: "Signin Two",
            m_childlink: "/login2",
          },
          {
            m_childtitle: "Signin Three",
            m_childlink: "/login3",
          },
          {
            m_childtitle: "Signup One",
            m_childlink: "/register",
          },
          {
            m_childtitle: "Signup Two",
            m_childlink: "/register/register2",
          },
          {
            m_childtitle: "Signup Three",
            m_childlink: "/register/register3",
          },
          {
            m_childtitle: "Forget Password One",
            m_childlink: "/forgot-password",
          },
          {
            m_childtitle: "Forget Password Two",
            m_childlink: "/forgot-password2",
          },
          {
            m_childtitle: "Forget Password Three",
            m_childlink: "/forgot-password3",
          },
          {
            m_childtitle: "Lock Screen One",
            m_childlink: "/lock-screen",
          },
          {
            m_childtitle: "Lock Screen Two",
            m_childlink: "/lock-screen2",
          },
          {
            m_childtitle: "Lock Screen Three",
            m_childlink: "/lock-screen3",
          },
        ],
      },

      {
        megamenutitle: "Components",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "typography",
            m_childlink: "typography",
          },
          {
            m_childtitle: "colors",
            m_childlink: "colors",
          },
          {
            m_childtitle: "alert",
            m_childlink: "alert",
          },
          {
            m_childtitle: "button",
            m_childlink: "button",
          },
          {
            m_childtitle: "card",
            m_childlink: "card",
          },
          {
            m_childtitle: "carousel",
            m_childlink: "carousel",
          },
          {
            m_childtitle: "dropdown",
            m_childlink: "dropdown",
          },
          {
            m_childtitle: "image",
            m_childlink: "image",
          },
          {
            m_childtitle: "modal",
            m_childlink: "modal",
          },
          {
            m_childtitle: "Progress bar",
            m_childlink: "progress-bar",
          },
          {
            m_childtitle: "Placeholder",
            m_childlink: "placeholder",
          },

          {
            m_childtitle: "Tab & Accordion",
            m_childlink: "tab-accordion",
          },
        ],
      },
      {
        megamenutitle: "Forms",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Input",
            m_childlink: "input",
          },
          {
            m_childtitle: "Input group",
            m_childlink: "input-group",
          },
          {
            m_childtitle: "Input layout",
            m_childlink: "input-layout",
          },
          {
            m_childtitle: "Form validation",
            m_childlink: "form-validation",
          },
          {
            m_childtitle: "Wizard",
            m_childlink: "form-wizard",
          },
          {
            m_childtitle: "Input mask",
            m_childlink: "input-mask",
          },
          {
            m_childtitle: "File input",
            m_childlink: "file-input",
          },
          {
            m_childtitle: "Form repeater",
            m_childlink: "form-repeater",
          },
          {
            m_childtitle: "Textarea",
            m_childlink: "textarea",
          },
          {
            m_childtitle: "Checkbox",
            m_childlink: "checkbox",
          },
          {
            m_childtitle: "Radio button",
            m_childlink: "radio-button",
          },
          {
            m_childtitle: "Switch",
            m_childlink: "switch",
          },
        ],
      },
      {
        megamenutitle: "Utility",
        megamenuicon: "heroicons-outline:user",
        singleMegamenu: [
          {
            m_childtitle: "Invoice",
            m_childlink: "invoice",
          },
          {
            m_childtitle: "Pricing",
            m_childlink: "pricing",
          },
          {
            m_childtitle: "Testimonial",
            m_childlink: "testimonial",
          },
          {
            m_childtitle: "FAQ",
            m_childlink: "faq",
          },
          {
            m_childtitle: "Blog",
            m_childlink: "blog",
          },
          {
            m_childtitle: "404 page",
            m_childlink: "/404",
          },
          {
            m_childtitle: "Coming Soon",
            m_childlink: "/coming-soon",
          },
          {
            m_childtitle: "Under Maintanance page",
            m_childlink: "/under-construction",
          },
        ],
      },
    ],
  },

  {
    isHeadr: true,
    title: "PAGES",
  },
  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    link: "form-elements",
    child: [
      {
        childtitle: "Basic",
        childlink: "basic",
        childicon: "heroicons-outline:document-text",
      },
      {
        childtitle: "Statistic",
        childlink: "statistic",
        childicon: "heroicons-outline:document-text",
      },
    ],
  },

  {
    title: "Extra",
    icon: "heroicons-outline:template",

    child: [
      {
        childtitle: "Basic Table",
        childlink: "table-basic",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Advanced table",
        childlink: "table-advanced",
        childicon: "heroicons-outline:table",
      },
      {
        childtitle: "Apex chart",
        childlink: "appex-chart",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Chart js",
        childlink: "chartjs",
        childicon: "heroicons-outline:chart-bar",
      },
      {
        childtitle: "Map",
        childlink: "map",
        childicon: "heroicons-outline:map",
      },
    ],
  },
];

export const alertType = [
  {
    type: "dark",
  },
  {
    type: "primary",
  },

  {
    type: "secondary",
  },
  {
    type: "success",
  },
  {
    type: "info",
  },
  {
    type: "danger",
  },
  {
    type: "warning",
  },
];

export const alertType2 = [
  {
    type: "dark-light",
  },
  {
    type: "primary-light",
  },

  {
    type: "secondary-light",
  },
  {
    type: "success-light",
  },
  {
    type: "info-light",
  },
  {
    type: "danger-light",
  },
  {
    type: "warning-light",
  },
];

export const alertType3 = [
  {
    type: "dark",
    icon: "fluent:target-20-regular",
  },
  {
    type: "primary",
    icon: "fluent:target-20-regular",
  },

  {
    type: "secondary",
    icon: "heroicons-outline:support",
  },
  {
    type: "success",
    icon: "akar-icons:double-check",
  },
  {
    type: "t-info",
    icon: "heroicons-outline:information-circle",
  },
  {
    type: "danger",
    icon: "heroicons-outline:exclamation",
  },
  {
    type: "warning",
    icon: "heroicons-outline:ban",
  },
];
export const alertType4 = [
  {
    type: "dark-light",
    icon: "fluent:target-20-regular",
  },
  {
    type: "primary-light",
    icon: "fluent:target-20-regular",
  },

  {
    type: "secondary-light",
    icon: "heroicons-outline:support",
  },
  {
    type: "success-light",
    icon: "akar-icons:double-check",
  },
  {
    type: "info-light",
    icon: "heroicons-outline:information-circle",
  },
  {
    type: "danger-light",
    icon: "heroicons-outline:exclamation",
  },
  {
    type: "warning-light",
    icon: "heroicons-outline:ban",
  },
];
export const alertType5 = [
  {
    type: "dark-outline",
  },
  {
    type: "primary-outline",
  },

  {
    type: "secondary-outline",
  },
  {
    type: "success-outline",
  },
  {
    type: "info-outline",
  },
  {
    type: "danger-outline",
  },
  {
    type: "warning-outline",
  },
];
export const alertType6 = [
  {
    type: "dark-outline",
    icon: "fluent:target-20-regular",
  },
  {
    type: "primary-outline",
    icon: "fluent:target-20-regular",
  },

  {
    type: "secondary-outline",
    icon: "heroicons-outline:support",
  },
  {
    type: "success-outline",
    icon: "akar-icons:double-check",
  },
  {
    type: "info-outline",
    icon: "heroicons-outline:information-circle",
  },
  {
    type: "danger-outline",
    icon: "heroicons-outline:exclamation",
  },
  {
    type: "warning-outline",
    icon: "heroicons-outline:ban",
  },
];

export const trackingParcel = [
  {
    title: "Project start date",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    date: "Sep 20, 2021 ",
    time: "12:32 AM",
    status: "ok",
  },
  {
    title: "Project start date",
    date: "Sep 20, 2021 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
    status: "ok",
  },
  {
    title: "Project start date",
    date: "Sep 20, 2021 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
    status: "ok",
  },
  {
    title: "Project start date",
    date: "Sep 20, 2021 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
  },
  {
    title: "Project start date",
    date: "Sep 20, 2021 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
  },
  {
    title: "Project start date",
    date: "Sep 20, 2021 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
  },
  {
    title: "Project start date",
    date: "Sep 20, 2021 ",
    desc: "This parcel is paid for by the customer. Please contact the customer for any further information.",
    time: "12:32 AM",
  },
];

export const TodoList = [
  {
    id: 1,
    image: userImg,
    title: "Amet minim mollit non deserunt ullam.",
    isDone: false,
  },
  {
    id: 2,
    image: user2Img,
    title: "Amet minim mollit non deserunt ullam.",
    isDone: false,
  },
  {
    id: 3,
    image: user3Img,
    title: "Amet minim mollit non deserunt ullam.",
    isDone: false,
  },
  {
    id: 4,
    image: user4Img,
    title: "Amet minim mollit non deserunt ullam.",
    isDone: false,
  },
  {
    id: 5,
    image: user2Img,
    title: "Amet minim mollit non deserunt ullam.",
    isDone: false,
  },
  {
    id: 6,
    image: user3Img,
    title: "Amet minim mollit non deserunt ullam.",
    isDone: false,
  },
];

//  todo fillter
export const fillters = [
  {
    value: "all",
    name: "My Task",
    icon: "uil:image-v",
  },
  {
    value: "fav",
    name: "Starred",
    icon: "heroicons:star",
  },
  {
    value: "done",
    name: "Completed",
    icon: "heroicons:document-check",
  },
  {
    value: "trash",
    name: "Trash",
    icon: "heroicons:trash",
  },
  {
    name: "Team",
    icon: "heroicons:users",
    value: "team",
  },
  {
    name: "low",
    icon: "heroicons:flag",
    value: "low",
  },
  {
    name: "medium",
    icon: "heroicons:flag",
    value: "medium",
  },
  {
    name: "high",
    icon: "heroicons:flag",
    value: "high",
  },
  {
    name: "update",
    icon: "heroicons:refresh",
    value: "update",
  },
];

export const editCatagory = [
  {
    value: "team",
    label: "team",
  },
  {
    value: "low",
    label: "low",
  },
  {
    value: "medium",
    label: "medium",
  },
  {
    value: "high",
    label: "high",
  },
];

export const projectCatagory = [
  {
    value: "team",
    label: "team",
  },
  {
    value: "low",
    label: "low",
  },
  {
    value: "medium",
    label: "medium",
  },
  {
    value: "high",
    label: "high",
  },
];

import avatar1 from "@/assets/images/avatar/av-1.svg";
import avatar2 from "@/assets/images/avatar/av-2.svg";
import avatar3 from "@/assets/images/avatar/av-3.svg";
import avatar4 from "@/assets/images/avatar/av-4.svg";
import avatar5 from "@/assets/images/avatar/av-5.svg";
import avatar6 from "@/assets/images/avatar/av-6.svg";
export const assignOption = [
  {
    title: "Mahedi Amin",
    image: avatar1,
  },
  {
    title: "Sovo Haldar",
    image: avatar2,
  },
  {
    title: "Rakibul Islam",
    image: avatar3,
  },
  {
    title: "Moni Haldar",
    image: avatar4,
  },
  {
    title: "Pritom Miha",
    image: avatar5,
  },
  {
    title: "Simanta Kika",
    image: avatar6,
  },
];

// ecommarce data

import blackJumper from "@/assets/images/e-commerce/product-card/classical-black-tshirt.png";
import blackTshirt from "@/assets/images/e-commerce/product-card/black-t-shirt.png";
import checkShirt from "@/assets/images/e-commerce/product-card/check-shirt.png";
import grayJumper from "@/assets/images/e-commerce/product-card/gray-jumper.png";
import grayTshirt from "@/assets/images/e-commerce/product-card/gray-t-shirt.png";
import pinkBlazer from "@/assets/images/e-commerce/product-card/pink-blazer.png";
import redTshirt from "@/assets/images/e-commerce/product-card/red-t-shirt.png";
import yellowFrok from "@/assets/images/e-commerce/product-card/yellow-frok.png";
import yellowJumper from "@/assets/images/e-commerce/product-card/yellow-jumper.png";

export const products =
[
  {
    "id": 1,
    "title": "Smartphone X200",
    "slug": "smartphone-x200",
    "description": "The latest Smartphone X200 with advanced features and sleek design. A modern coffee table with a minimalist design, perfect for any living room. A stylish denim jacket that fits perfectly for casual outings.",
    "brand_id": 1,
    "category_id": 1,
    "tags": "[\"smartphone\", \"electronics\"]",
    "images_urls": "[\"https://lrumeur.com/cdn/shop/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=360\", \"https://cdn.shopify.com/s/files/1/0564/9740/6031/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=493\"]",
    "status": "published",
    "created_at Francs CFA": "2024-07-04T15:25:00.000000Z",
    "updated_at": "2024-07-04T15:25:00.000000Z",
    "deleted_at": null,
    "brand": {
      "id": 1,
      "name": "Victoria Secret",
      "slug": "victoria-secret",
      "created_at": "2024-07-04T15:24:57.000000Z",
      "updated_at": "2024-07-04T15:24:57.000000Z",
      "deleted_at": null
  },
  "category": {
      "id": 1,
      "name": "Bridal",
      "slug": "bridal",
      "parent_category_id": null,
      "desc": null,
      "created_at": "2024-07-04T15:24:56.000000Z",
      "updated_at": "2024-07-04T15:24:56.000000Z",
      "deleted_at": null
    },
    "discount": null,
    "variants": [
      {
        "id": 1,
        "product_id": 1,
        "title": "Smartphone X200 - Black 128GB",
        "price": "699.99",
        "sku": "X200-BLK-128",
        "position": 1,
        "option1": "Black",
        "option2": "128GB",
        "barcode": "1234567890123",
        "grams": 200,
        "weight": "0.20",
        "weight_unit": "kg",
        "inventory_quantity": 50,
        "old_inventory_quantity": 0,
        "images": null,
        "created_at": "2024-07-04T15:25:01.000000Z",
        "updated_at": "2024-07-04T15:25:01.000000Z"
      },
      {
        "id": 2,
        "product_id": 1,
        "title": "Smartphone X200 - White 256GB",
        "price": "799.99",
        "sku": "X200-WHT-256",
        "position": 1,
        "option1": "White",
        "option2": "256GB",
        "barcode": "1234567890124",
        "grams": 200,
        "weight": "0.20",
        "weight_unit": "kg",
        " Francs CFA Francs CFAory_quantity": 30,
        "old_inventory_quantity": 0,
        "images": null,
        "created_at": "2024-07-04T15:25:02.000000Z",
        "updated_at": "2024-07-04T15:25:02.000000Z"
      }
    ],
    "options": [
      {
        "id": 1,
        "product_id": 1,
        "name": "Color",
        "position": 1,
        "created_at": "2024-07-04T15:25:04.000000Z",
        "updated_at": "2024-07-04T15:25:04.000000Z",
        "values": [
          {
            "id": 1,
            "option_id": 1,
            "value": "Black",
            "created_at": "2024-07-04T15:25:05.000000Z",
            "updated_at": "2024-07-04T15:25:05.000000Z"
          },
          {
            "id": 2,
            "option_id": 1,
            "value": "White",
            "created_at": "2024-07-04T15:25:07.000000Z",
            "updated_at": "2024-07-04T15:25:07.000000Z"
          }
        ]
      },
      {
        "id": 2,
        "product_id": 1,
        "name": "Storage",
        "position": 2,
        "created_at": "2024-07-04T15:25:09.000000Z",
        "updated_at": "2024-07-04T15:25:09.000000Z",
        "values": [
          {
            "id": 3,
            "option_id": 2,
            "value": "128GB",
            "created_at": "2024-07-04T15:25:10.000000Z",
            "updated_at": "2024-07-04T15:25:10.000000Z"
          },
          {
            "id": 4,
            "option_id": 2,
            "value": "256GB",
            "created_at": "2024-07-04T15:25:11.000000Z",
            "updated_at": "2024-07-04T15:25:11.000000Z"
          }
        ]
      }
    ]
  },
  {
        "id": 2,
        "title": "Stylish Denim Jacket",
        "slug": "stylish-denim-jacket",
        "description": "A stylish denim jacket that fits perfectly for casual outings. A modern coffee table with a minimalist design, perfect for any living room. The latest Smartphone X200 with advanced features and sleek design.",
        "brand_id": 2,
        "category_id": 2,
        "tags": "[\"denim\", \"jacket\", \"clothing\"]",
        "images_urls": "[\"https://lrumeur.com/cdn/shop/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=360\", \"https://cdn.shopify.com/s/files/1/0564/9740/6031/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=493\"]",
        "status": "published",
        "created_at": "2024-07-04T15:25:13.000000Z",
        "updated_at": "2024-07-04T15:25:13.000000Z",
        "deleted_at": null,
        "brand": {
            "id": 2,
            "name": "Calvin Klein",
            "slug": "calvin-klein",
            "created_at": "2024-07-04T15:24:57.000000Z",
            "updated_at": "2024-07-04T15:24:57.000000Z",
            "deleted_at": null
        },
        "category": {
            "id": 2,
            "name": "Collections",
            "slug": "collections",
            "parent_category_id": null,
            "desc": null,
            "created_at": "2024-07-04T15:24:56.000000Z",
            "updated_at": "2024-07-04T15:24:56.000000Z",
            "deleted_at": null
        },
        "discount": null,
        "variants": [
            {
                "id": 3,
                "product_id": 2,
                "title": "Denim Jacket - Small",
                "price": "59.99",
                "sku": "DJ-SML",
                "position": 1,
                "option1": "Blue",
                "option2": "Small",
                "barcode": "2345678901234",
                "grams": 500,
                "weight": "0.50",
                "weight_unit": "kg",
                "inventory_quantity": 20,
                "old_inventory_quantity": 0,
                "images": null,
                "created_at": "2024-07-04T15:25:15.000000Z",
                "updated_at": "2024-07-04T15:25:15.000000Z"
            },
            {
                "id": 4,
                "product_id": 2,
                "title": "Denim Jacket - Medium",
                "price": "59.99",
                "sku": "DJ-MED",
                "position": 1,
                "option1": "Blue",
                "option2": "Medium",
                "barcode": "2345678901235",
                "grams": 550,
                "weight": "0.55",
                "weight_unit": "kg",
                "inventory_quantity": 30,
                "old_inventory_quantity": 0,
                "images": null,
                "created_at": "2024-07-04T15:25:17.000000Z",
                "updated_at": "2024-07-04T15:25:17.000000Z"
            }
        ],
        "options": [
            {
                "id": 3,
                "product_id": 2,
                "name": "Color",
                "position": 1,
                "created_at": "2024-07-04T15:25:18.000000Z",
                "updated_at": "2024-07-04T15:25:18.000000Z",
                "values": [
                    {
                        "id": 5,
                        "option_id": 3,
                        "value": "Blue",
                        "created_at": "2024-07-04T15:25:19.000000Z",
                        "updated_at": "2024-07-04T15:25:19.000000Z"
                    }
                ]
            },
            {
                "id": 4,
                "product_id": 2,
                "name": "Size",
                "position": 2,
                "created_at": "2024-07-04T15:25:20.000000Z",
                "updated_at": "2024-07-04T15:25:20.000000Z",
                "values": [
                    {
                        "id": 6,
                        "option_id": 4,
                        "value": "Small",
                        "created_at": "2024-07-04T15:25:21.000000Z",
                        "updated_at": "2024-07-04T15:25:21.000000Z"
                    },
                    {
                        "id": 7,
                        "option_id": 4,
                        "value": "Medium",
                        "created_at": "2024-07-04T15:25:23.000000Z",
                        "updated_at": "2024-07-04T15:25:23.000000Z"
                    }
                ]
            }
        ]
  },
  {
    "id": 3,
    "title": "Modern Coffee Table",
    "slug": "modern-coffee-table",
    "description": "A modern coffee table with a minimalist design, perfect for any living room. A stylish denim jacket that fits perfectly for casual outings. The latest Smartphone X200 with advanced features and sleek design.",
    "brand_id": 3,
    "category_id": 3,
    "tags": "[\"furniture\", \"coffee table\", \"living room\"]",
    "images_urls": "[\"https://lrumeur.com/cdn/shop/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=360\", \"https://cdn.shopify.com/s/files/1/0564/9740/6031/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=493\"]",
    "status": "published",
    "created_at": "2024-07-04T15:25:25.000000Z",
    "updated_at": "2024-07-04T15:25:25.000000Z",
    "deleted_at": null,
    "brand": {
      "id": 3,
      "name": "H&M",
      "slug": "h-and-m",
      "created_at": "2024-07-04T15:24:57.000000Z",
      "updated_at": "2024-07-04T15:24:57.000000Z",
      "deleted_at": null
    },
    "category": {
      "id": 3,
      "name": "Bestsellers",
      "slug": "bestsellers",
      "parent_category_id": null,
      "desc": null,
      "created_at": "2024-07-04T15:24:56.000000Z",
      "updated_at": "2024-07-04T15:24:56.000000Z",
      "deleted_at": null
    },
    "discount": null,
    "variants": [
      {
        "id": 5,
        "product_id": 3,
        "title": "Coffee Table - Oak",
        "price": "149.99",
        "sku": "CT-OAK",
        "position": 1,
        "option1": "Oak",
        "option2": "Standard",
        "barcode": "3456789012345",
        "grams": 10000,
        "weight": "10.00",
        "weight_unit": "kg",
        "inventory_quantity": 15,
        "old_inventory_quantity": 0,
        "images": null,
        "created_at": "2024-07-04T15:25:27.000000Z",
        "updated_at": "2024-07-04T15:25:27.000000Z"
      },
      {
        "id": 6,
        "product_id": 3,
        "title": "Coffee Table - Walnut",
        "price": "169.99",
        "sku": "CT-WAL",
        "position": 1,
        "option1": "Walnut",
        "option2": "Standard",
        "barcode": "3456789012346",
        "grams": 10000,
        "weight": "10.00",
        "weight_unit": "kg",
        "inventory_quantity": 10,
        "old_inventory_quantity": 0,
        "images": null,
        "created_at": "2024-07-04T15:25:28.000000Z",
        "updated_at": "2024-07-04T15:25:28.000000Z"
      }
    ],
    "options": [
      {
        "id": 5,
        "product_id": 3,
        "name": "Finish",
        "position": 1,
        "created_at": "2024-07-04T15:25:30.000000Z",
        "updated_at": "2024-07-04T15:25:30.000000Z",
        "values": [
          {
            "id": 8,
            "option_id": 5,
            "value": "Oak",
            "created_at": "2024-07-04T15:25:31.000000Z",
            "updated_at": "2024-07-04T15:25:31.000000Z"
          },
          {
            "id": 9,
            "option_id": 5,
            "value": "Walnut",
            "created_at": "2024-07-04T15:25:32.000000Z",
            "updated_at": "2024-07-04T15:25:32.000000Z"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Radiance Elixir Face Serum",
    "slug": "radiance-elixir-face-serum",
    "description": "A luxurious serum designed to hydrate and rejuvenate your skin, giving you a radiant glow.",
    "tags": "[\"denim\", \"jacket\", \"clothing\"]",
    "images_urls": "[\"https://lrumeur.com/cdn/shop/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=360\", \"https://cdn.shopify.com/s/files/1/0564/9740/6031/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=493\"]",
    "status": "published",
    "created_at": "2024-07-04T15:25:13.000000Z",
    "updated_at": "2024-07-04T15:25:13.000000Z",
    "deleted_at": null,
    "brand": {
      "id": 1,
      "name": "Victoria Secret",
      "slug": "victoria-secret",
      "created_at": "2024-07-04T15:24:57.000000Z",
      "updated_at": "2024-07-04T15:24:57.000000Z",
      "deleted_at": null,
      "products_count": 1
    },
    "category": {
      "id": 3,
      "name": "Bestsellers",
      "slug": "bestsellers",
      "created_at": "2024-07-04T15:24:56.000000Z",
      "updated_at": "2024-07-04T15:24:56.000000Z",
      "deleted_at": null,
      "products_count": 1
    },
    "discount": null,
    "variants": [
      {
        "id": 1,
        "title": "Radiance Elixir Face Serum - 30 ml",
        "price": 45.00,
        "sku": "REFS30ML",
        "option1": null,
        "option2": null,
        "barcode": "1234567890123",
        "grams": 30,
        "weight": 0.03,
        "inventory_quantity": 100
      }
    ],
    "options": []
  },
  {
    "id": 5,
    "title": "Glamour Lash Mascara",
    "slug": "glamour-lash-mascara",
    "description": "A volumizing and lengthening mascara that enhances your lashes with a single swipe.",
    "tags": "[\"denim\", \"jacket\", \"clothing\"]",
    "images_urls": "[\"https://lrumeur.com/cdn/shop/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=360\", \"https://cdn.shopify.com/s/files/1/0564/9740/6031/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=493\"]",
    "status": "published",
    "created_at": "2024-07-04T15:25:13.000000Z",
    "updated_at": "2024-07-04T15:25:13.000000Z",
    "deleted_at": null,
    "brand": {
      "id": 2,
      "name": "Calvin Klein",
      "slug": "calvin-klein",
      "created_at": "2024-07-04T15:24:57.000000Z",
      "updated_at": "2024-07-04T15:24:57.000000Z",
      "deleted_at": null,
      "products_count": 1
    },
    "category": {
      "id": 2,
      "name": "Collections",
      "slug": "collections",
      "created_at": "2024-07-04T15:24:56.000000Z",
      "updated_at": "2024-07-04T15:24:56.000000Z",
      "deleted_at": null,
      "products_count": 1
    },
    "discount": null,
    "variants": [
      {
        "id": 2,
        "title": "Glamour Lash Mascara - 10 ml",
        "price": 22.00,
        "sku": "GLM10ML",
        "option1": null,
        "option2": null,
        "barcode": "1234567890124",
        "grams": 10,
        "weight": 0.01,
        "inventory_quantity": 200
      }
    ],
    "options": []
  },
  {
    "id": 6,
    "title": "Velvet Kiss Lipstick",
    "slug": "velvet-kiss-lipstick",
    "description": "A creamy, highly pigmented lipstick that offers a luxurious, velvety finish.",
    "images_urls": "[\"https://lrumeur.com/cdn/shop/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=360\", \"https://cdn.shopify.com/s/files/1/0564/9740/6031/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=493\"]",
    "status": "published",
    "created_at": "2024-07-04T15:25:13.000000Z",
    "updated_at": "2024-07-04T15:25:13.000000Z",
    "deleted_at": null,
    "brand": {
      "id": 3,
      "name": "H&M",
      "slug": "h-and-m",
      "created_at": "2024-07-04T15:24:57.000000Z",
      "updated_at": "2024-07-04T15:24:57.000000Z",
      "deleted_at": null,
      "products_count": 1
    },
    "category": {
      "id": 4,
      "name": "Bras & Panties",
      "slug": "bras-panties",
      "created_at": "2024-07-04T15:24:56.000000Z",
      "updated_at": "2024-07-04T15:24:56.000000Z",
      "deleted_at": null,
      "products_count": 0
    },
    "discount": null,
    "variants": [
      {
        "id": 3,
        "title": "Velvet Kiss Lipstick - Ruby Red",
        "price": 18.00,
        "sku": "VKL-RR",
        "option1": "#E0115F",
        "option2": null,
        "barcode": "1234567890125",
        "grams": 3.5,
        "weight": 0.0035,
        "inventory_quantity": 150
      },
      {
        "id": 4,
        "title": "Velvet Kiss Lipstick - Nude Beige",
        "price": 18.00,
        "sku": "VKL-NB",
        "option1": "#cab9a7",
        "option2": null,
        "barcode": "1234567890126",
        "grams": 3.5,
        "weight": 0.0035,
        "inventory_quantity": 150
      },
      {
        "id": 5,
        "title": "Velvet Kiss Lipstick - Plum Passion",
        "price": 18.00,
        "sku": "VKL-PP",
        "option1": "#9E4780",
        "option2": null,
        "barcode": "1234567890127",
        "grams": 3.5,
        "weight": 0.0035,
        "inventory_quantity": 150
      }
    ],
    "options": [
      {
        "id": 1,
        "name": "Color",
        "position": 1,
        "values": [
          {"id": 1, "value": "#E0115F"},
          {"id": 2, "value": "#cab9a7"},
          {"id": 3, "value": "#9E4780"}
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Bliss Vibe Personal Massager",
    "slug": "bliss-vibe-personal-massager",
    "description": "A discreet and powerful personal massager designed for maximum pleasure.",
    "images_urls": "[\"https://lrumeur.com/cdn/shop/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=360\", \"https://cdn.shopify.com/s/files/1/0564/9740/6031/files/106_front_black_SiyahOn_mockup.png?v=1719816551&width=493\"]",
    "status": "published",
    "created_at": "2024-07-04T15:25:13.000000Z",
    "updated_at": "2024-07-04T15:25:13.000000Z",
    "deleted_at": null,
    "brand": {
      "id": 1,
      "name": "Victoria Secret",
      "slug": "victoria-secret",
      "created_at": "2024-07-04T15:24:57.000000Z",
      "updated_at": "2024-07-04T15:24:57.000000Z",
      "deleted_at": null,
      "products_count": 1
    },
    "category": {
      "id": 5,
      "name": "Lingerie",
      "slug": "lingerie",
      "created_at": "2024-07-04T15:24:56.000000Z",
      "updated_at": "2024-07-04T15:24:56.000000Z",
      "deleted_at": null,
      "products_count": 0
    },
    "discount": null,
    "variants": [
      {
        "id": 6,
        "title": "Bliss Vibe Personal Massager - Pink",
        "price": 55.00,
        "sku": "BVPM-PINK",
        "option1": "Pink",
        "option2": null,
        "barcode": "1234567890128",
        "grams": 200,
        "weight": 0.2,
        "inventory_quantity": 80
      },
      {
        "id": 7,
        "title": "Bliss Vibe Personal Massager - Purple",
        "price": 55.00,
        "sku": "BVPM-PURPLE",
        "option1": "Purple",
        "option2": null,
        "barcode": "1234567890129",
        "grams": 200,
        "weight": 0.2,
        "inventory_quantity": 80
      }
    ],
    "options": [
      {
        "id": 2,
        "name": "Color",
        "position": 1,
        "values": [
          {"id": 4, "value": "Pink"},
          {"id": 5, "value": "Purple"}
        ]
      }
    ]
  }
    
];

export const categories = [
  { label: "All", value: "all", count: "9724" },
  { label: "Men", value: "men", count: "1312" },
  { label: "Women", value: "women", count: "3752" },
  { label: "Child", value: "child", count: "985" },
  { label: "Baby", value: "baby", count: "745" },
  { label: "Footwear", value: "footwear", count: "1280" },
  { label: "Furniture", value: "furniture", count: "820" },
  { label: "Mobile", value: "mobile", count: "2460" },
];

export const brands = [
  { label: "Apple", value: "apple", count: "9724" },
  { label: "Apex", value: "apex", count: "1312" },
  { label: "Easy", value: "easy", count: "3752" },
  { label: "Pixel", value: "pixel", count: "985" },
  { label: "Samsung", value: "samsung", count: "2460" },
];

export const price = [
  {
    label: "$0 - $199",
    value: {
      min: 0,
      max: 199,
    },
    count: "9724",
  },
  {
    label: "$200 - $449",
    value: {
      min: 200,
      max: 499,
    },
    count: "1312",
  },
  {
    label: "$450 - $599",
    value: {
      min: 450,
      max: 599,
    },
    count: "3752",
  },
  {
    label: "$600 - $799",
    value: {
      min: 600,
      max: 799,
    },
    count: "985",
  },
  {
    label: "$800 & Above",
    value: {
      min: 800,
      max: 1000,
    },
    count: "745",
  },
];

export const ratings = [
  { name: 5, value: 5, count: "9724" },
  { name: 4, value: 4, count: "1312" },
  { name: 3, value: 3, count: "3752" },
  { name: 2, value: 2, count: "985" },
  { name: 1, value: 1, count: "2460" },
];

export const selectOptions = [
  {
    value: "option1",
    label: "Option 1",
  },
  {
    value: "option2",
    label: "Option 2",
  },
  {
    value: "option3",
    label: "Option 3",
  },
];
export const selectCategory = [
  {
    value: "option1",
    label: "Top Rated",
  },
  {
    value: "option2",
    label: "Option 2",
  },
  {
    value: "option3",
    label: "Option 3",
  },
];

import bkash from "@/assets/images/e-commerce/cart-icon/bkash.png";
import fatoorah from "@/assets/images/e-commerce/cart-icon/fatoorah.png";
import instamojo from "@/assets/images/e-commerce/cart-icon/instamojo.png";
import iyzco from "@/assets/images/e-commerce/cart-icon/iyzco.png";
import nagad from "@/assets/images/e-commerce/cart-icon/nagad.png";
import ngenious from "@/assets/images/e-commerce/cart-icon/ngenious.png";
import payfast from "@/assets/images/e-commerce/cart-icon/payfast.png";
import payku from "@/assets/images/e-commerce/cart-icon/payku.png";
import paypal from "@/assets/images/e-commerce/cart-icon/paypal.png";
import paytm from "@/assets/images/e-commerce/cart-icon/paytm.png";
import razorpay from "@/assets/images/e-commerce/cart-icon/razorpay.png";
import ssl from "@/assets/images/e-commerce/cart-icon/ssl.png";
import stripe from "@/assets/images/e-commerce/cart-icon/stripe.png";
import truck from "@/assets/images/e-commerce/cart-icon/truck.png";
import vougepay from "@/assets/images/e-commerce/cart-icon/vougepay.png";

export const payments = [
  {
    img: bkash,
    value: "bkash",
  },
  {
    img: fatoorah,
    value: "fatoorah",
  },
  {
    img: instamojo,
    value: "instamojo",
  },
  {
    img: iyzco,
    value: "iyzco",
  },
  {
    img: nagad,
    value: "nagad",
  },
  {
    img: ngenious,
    value: "ngenious",
  },

  {
    img: payfast,
    value: "payfast",
  },
  {
    img: payku,
    value: "payku",
  },
  {
    img: paypal,
    value: "paypal",
  },
  {
    img: paytm,
    value: "paytm",
  },
  {
    img: razorpay,
    value: "razorpay",
  },
  {
    img: ssl,
    value: "ssl",
  },
  {
    img: stripe,
    value: "stripe",
  },
  {
    img: truck,
    value: "truck",
  },
  {
    img: vougepay,
    value: "vougepay",
  },
];
