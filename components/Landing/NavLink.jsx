export default function NavLink({ href, label, onClick, className = "" }) {
  return (
    <a className={className} href={href} onClick={onClick}>
      {label}
    </a>
  );
}
