export function Container({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`mx-auto w-full max-w-content px-5 md:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
