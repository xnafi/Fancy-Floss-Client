import React from 'react'

const Faq = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">Do I really need to floss?</h3>
            <p className="mt-1 dark:text-gray-400">No. Many crewed boats will ask you to charter for a week, usually Saturday to Saturday, but this is most rigid during high season in the Mediterranean (Greece, Croatia, Italy France etc).  The Caribbean is much more flexible; the minimum charter duration is generally 5 days. , which forms wedges and widens the space between teeth and gums, causing pockets. Over time, gums pull away and teeth loosen. In addition to this, there are thousands of</p>
          </div>
          <div>
            <h3 className="font-semibold">Does a rinse or mouthwash help?</h3>
            <p className="mt-1 dark:text-gray-400">Mouthwashes for cavity protection, sensitivity, and fresh breath may help when you use them with regular brushing and flossing -- but not instead of daily cleanings. Your dentist can recommend the best type for you.Some people need twice-daily rinses for gum health or alcohol-free washes for dry mouth.Kids under 6 shouldn't use mouthwash to avoid the chance of them swallowing it.</p>
          </div>
          <div>
            <h3 className="font-semibold">What are early signs of dental trouble?</h3>
            <p className="mt-1 dark:text-gray-400">Visit a dentist if you have any of these issues or see your child having trouble chewing or complaining of soreness: Mouth sores Jaw painRednessSwollen face or gumsTooth sensitivityBroken teeth Dry mouth Bleeding gums Bad breath or a bad taste in your mouth Getting checked out right away prevents more serious problems and infections.</p>
          </div>
          <div>
            <h3 className="font-semibold">Why do I need dental exams?</h3>
            <p className="mt-1 dark:text-gray-400">Regular exams help spot trouble early to prevent bigger and more costly treatments later.A dental hygienist will start by cleaning buildup from your teeth. Then the dentist will probe spots on the surfaces and near the gumline with special tools. If it's been a while between appointments, you may have some sore and sensitive areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq