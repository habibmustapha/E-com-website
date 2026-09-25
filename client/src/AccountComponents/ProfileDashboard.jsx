import { Pencil, Mail, Phone, MapPin } from "lucide-react";

const DEFAULT_USER = {
  name: "Habib Mustapha",
  email: "Habib.Mustapha@example.com",
  phone: "+213 555 012 345",
  address: "12 Rue des Frères Bouadou, Oran, Algeria",
  memberSince: "2023",
  avatarUrl: "",
};

const ProfileDashboard = () => {
  const user = DEFAULT_USER;
  return (
    <>
      <div className="w-full">
        <SectionHeader
          title="Profile"
          description="Your personal account information"
        />
        <div className="bg-white min-w-full border border-slate-200 rounded-xl p-6">
          <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
            <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-semibold text-lg overflow-hidden">
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <h1>HM</h1>
              )}
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-slate-900">
                {user.name}
              </p>
              <p className="text-sm text-slate-500">
                Member since {user.memberSince}
              </p>
            </div>
            <button
              type="button"
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg px-3 py-1.5 hover:bg-slate-50"
            >
              <Pencil size={14} />
              Edit
            </button>
          </div>

          <dl className="grid sm:grid-cols-2 gap-5 pt-6">
            <div className="flex items-start gap-3">
              <Mail size={16} className="text-slate-400 mt-0.5" />
              <div>
                <dt className="text-xs text-slate-400">Email</dt>
                <dd className="text-sm text-slate-800 mt-0.5">{user.email}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-slate-400 mt-0.5" />
              <div>
                <dt className="text-xs text-slate-400">Phone</dt>
                <dd className="text-sm text-slate-800 mt-0.5">{user.phone}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:col-span-2">
              <MapPin size={16} className="text-slate-400 mt-0.5" />
              <div>
                <dt className="text-xs text-slate-400">Address</dt>
                <dd className="text-sm text-slate-800 mt-0.5">
                  {user.address}
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default ProfileDashboard;

function SectionHeader({ title, description }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      {description && (
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      )}
    </div>
  );
}
