type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div>
        {children}
      </div>
    </div>
  );
}