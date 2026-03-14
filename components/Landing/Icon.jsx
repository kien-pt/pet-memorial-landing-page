export default function Icon({ name }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  };

  switch (name) {
    case "flame":
      return (
        <svg {...common}>
          <path d="M12 3c1.8 2 3.8 4.2 3.8 7.1a3.8 3.8 0 1 1-7.6 0c0-1.7.8-3.1 1.8-4.3" />
          <path d="M12 11.2c1.3 1.1 2.2 2.3 2.2 3.9a2.2 2.2 0 1 1-4.4 0c0-.8.2-1.5.8-2.3" />
        </svg>
      );
    case "lotus":
      return (
        <svg {...common}>
          <path d="M12 6c2 1.9 3 4 3 6a3 3 0 0 1-6 0c0-2 1-4.1 3-6Z" />
          <path d="M7 10c1.6.7 2.7 2.1 2.7 3.7A2.7 2.7 0 0 1 7 16.4 3.5 3.5 0 0 1 4 13c0-1.4 1.1-2.5 3-3Z" />
          <path d="M17 10c-1.6.7-2.7 2.1-2.7 3.7a2.7 2.7 0 0 0 2.7 2.7A3.5 3.5 0 0 0 20 13c0-1.4-1.1-2.5-3-3Z" />
          <path d="M8 19h8" />
        </svg>
      );
    case "keepsake":
      return (
        <svg {...common}>
          <path d="M12 21s-6.5-4.2-6.5-9.3A3.7 3.7 0 0 1 12 9a3.7 3.7 0 0 1 6.5 2.7C18.5 16.8 12 21 12 21Z" />
          <circle cx="12" cy="12" r="1.2" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6.5 4.5h3L11 8l-1.9 1.9a15.6 15.6 0 0 0 5 5L16 13l3.5 1.5v3A1.5 1.5 0 0 1 18 19C10.8 19 5 13.2 5 6A1.5 1.5 0 0 1 6.5 4.5Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.6-2.8 7.9-7 10-4.2-2.1-7-5.4-7-10V6l7-3Z" />
          <path d="m9.5 12 1.8 1.8L15 10.2" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20.5S5 15.8 5 10.2A3.7 3.7 0 0 1 8.7 6.5c1.5 0 2.6.7 3.3 1.8.7-1.1 1.8-1.8 3.3-1.8A3.7 3.7 0 0 1 19 10.2c0 5.6-7 10.3-7 10.3Z" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <circle cx="6.5" cy="7.5" r="2.5" />
          <circle cx="17.5" cy="16.5" r="2.5" />
          <path d="M8.5 9c2.6 0 3.6 1 3.6 3 0 1.6.8 2.4 3.4 2.4" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="m12 3 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.7 7.2 18l.9-5.4L4.2 8.7l5.4-.8L12 3Z" />
        </svg>
      );
    case "frame":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M8 14l2.5-2.5 2.2 2.2 2.8-3.2L18 14" />
          <circle cx="9" cy="9" r="1" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 1.8" />
        </svg>
      );
    case "document":
      return (
        <svg {...common}>
          <path d="M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
          <path d="M14 3v4h4" />
          <path d="M10 12h6M10 16h4" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3l1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3Z" />
          <path d="M18.5 15.5 19 17l1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5Z" />
        </svg>
      );
    case "paw":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="1.6" />
          <circle cx="16" cy="8" r="1.6" />
          <circle cx="6.5" cy="12" r="1.5" />
          <circle cx="17.5" cy="12" r="1.5" />
          <path d="M12 12.5c-2.4 0-4.5 1.8-4.5 4 0 1.2.9 2 2.1 2 .9 0 1.5-.4 2.4-1 .8.6 1.5 1 2.4 1 1.2 0 2.1-.8 2.1-2 0-2.2-2.1-4-4.5-4Z" />
        </svg>
      );
    case "moon":
      return (
        <svg {...common}>
          <path d="M15.5 4.5a7.7 7.7 0 1 0 4 13.9A8.5 8.5 0 1 1 15.5 4.5Z" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M18 5c-6.1.3-10.2 4.4-10.5 10.5 3.7 1.2 8.5-.2 10.8-3.6C20 9.3 20 6.8 18 5Z" />
          <path d="M7 17c1.5-2.1 3.5-4 6-5.5" />
        </svg>
      );
    case "drop":
      return (
        <svg {...common}>
          <path d="M12 3.5c2.7 3.2 5 6 5 9a5 5 0 1 1-10 0c0-3 2.3-5.8 5-9Z" />
        </svg>
      );
    default:
      return null;
  }
}
