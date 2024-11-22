import { Check } from "lucide-react";

const membershipFeatures = [
  "Access to all community events",
  "Priority tournament registration",
  "Exclusive workshop discounts",
  "Member-only social events",
  "Online booking system access",
];

const courtPartnerFeatures = [
  "List your courts on our platform",
  "Increased visibility",
  "Tournament hosting opportunities",
  "Workshop collaboration",
  "Professional network access",
];

export default function JoinUs() {
  return (
    <section id="join" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Join Our Community
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect way to become part of our padel family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Become a Member</h3>
            </div>
            <div className="space-y-4">
              {membershipFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
              <div className="mt-8">
                <p className="text-3xl font-bold mb-4">$49/month</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                  Join as Member
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg border border-gray-200 p-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">Partner Your Court</h3>
            </div>
            <div className="space-y-4">
              {courtPartnerFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
              <div className="mt-8">
                <p className="text-3xl font-bold mb-4">Custom Pricing</p>
                <button className="w-full bg-transparent border border-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition">
                  Apply as Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
