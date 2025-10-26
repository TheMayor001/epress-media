export default function Unauthorized() {
  return (
    <div className="flex h-screen items-center justify-center text-center">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Access Denied</h1>
        <p className="text-gray-600">You don’t have permission to view this page.</p>
      </div>
    </div>
  );
}
