import Image from "next/image";

const supportTopics = [
  {
    icon: "/public-transportation.webp",
    title: "Public Transportation",
    description: "Understand routes, passes, and best ways to get around",
  },
  {
    icon: "/open-bank-account.webp",
    title: "Open a Bank Account",
    description: "Step-by-step guidance to set up and manage your finances",
  },
  {
    icon: "/doctors-appointment.webp",
    title: "Doctor's Appointment",
    description: "How to find care, book visits, and use insurance",
  },
  {
    icon: "/new-country-culture.webp",
    title: "New Country Culture",
    description: "Understand laws, etiquette, and what to expect socially",
  },
  {
    icon: "/religion-relationship.webp",
    title: "Religion and Relationship",
    description: "Connect with faith groups and cultural communities",
  },
  {
    icon: "/food-health.webp",
    title: "Food & Health",
    description: "Shop, cook, and eat well in your new environment",
  },
  {
    icon: "/financial-management.webp",
    title: "Financial Management",
    description: "Learn how to budget, save, and send money home",
  },
  {
    icon: "/entrepreneurship-more.webp",
    title: "Entrepreneurship and More",
    description: "Start a business, get licensed, and grow your future",
  },
];

export default function HelpImmigrants() {
  return (
    <section className="bg-white py-10 text-[#111] sm:py-12 lg:py-14">
      <div className="mx-auto max-w-165.25 px-4 sm:px-6 lg:px-0">
        <h2 className="mb-8 text-center text-[28px] font-extrabold leading-tight sm:mb-10 sm:text-[36px] lg:text-[44px]">
          We Help <span className="text-[#0f62fd]">Immigrants</span> Thrive in a
          New Country
        </h2>
      </div>
      <div className="mx-auto grid max-w-292.5 items-start gap-8 px-4 sm:gap-10 sm:px-6 lg:max-h-[705.69px] lg:gap-12 lg:grid-cols-[1.05fr_1.3fr] lg:px-8">
        <div className="relative w-full min-h-64 sm:min-h-96 lg:min-h-256">
          <Image
            src="/hepimmigrant.webp"
            alt="Immigrant Knowhow app and family visual"
            width="893"
            height="1024"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h2 className="max-w-172.5 text-[18px] leading-tight font-extrabold text-black sm:text-[19px] lg:text-[20px]">
            Most newcomers don&apos;t arrive with a guidebook.
          </h2>
          <p className="mt-3 max-w-172.5 text-[16px] leading-normal font-light text-black sm:mt-4 sm:text-[18px] lg:text-[20px] lg:leading-[1.45]">
            Immigrant Knowhow is your digital companion, built to help
            immigrants connect, share experiences, and get real support as they
            adjust to life in a new country.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:mt-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-7">
            {supportTopics.map((topic) => (
              <li key={topic.title} className="flex items-start gap-3">
                <Image
                  src={topic.icon}
                  alt=""
                  width={42}
                  height={42}
                  className="mt-1 h-[42px] w-[42px] shrink-0 object-contain"
                />
                <div>
                  <h3 className="text-[16px] leading-tight font-extrabold text-black sm:text-[17px]">
                    {topic.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-[1.45] font-light text-black sm:text-[16px]">
                    {topic.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
