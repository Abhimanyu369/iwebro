const countries = [
  { name: "Sri Lanka", flag: "https://flagcdn.com/16x12/lk.png" },
  { name: "India", flag: "https://flagcdn.com/16x12/in.png" },
  { name: "Australia", flag: "https://flagcdn.com/16x12/au.png" },
  { name: "Malaysia", flag: "https://flagcdn.com/16x12/my.png" },
  { name: "Singapore", flag: "https://flagcdn.com/16x12/sg.png" },
  { name: "Indonesia", flag: "https://flagcdn.com/16x12/id.png" },
  { name: "Fiji", flag: "https://flagcdn.com/16x12/fj.png" },
  { name: "Cambodia", flag: "https://flagcdn.com/16x12/kh.png" },
  { name: "Bangladesh", flag: "https://flagcdn.com/16x12/bd.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/16x12/gb.png" },
  { name: "Canada", flag: "https://flagcdn.com/16x12/ca.png" },
  { name: "Nepal", flag: "https://flagcdn.com/16x12/np.png" },
  { name: "Maldives", flag: "https://flagcdn.com/16x12/mv.png" },
  { name: "China", flag: "https://flagcdn.com/16x12/cn.png" },
  { name: "Japan", flag: "https://flagcdn.com/16x12/jp.png" },
  { name: "Dubai", flag: "https://flagcdn.com/16x12/ae.png" },
  { name: "Kuwait", flag: "https://flagcdn.com/16x12/kw.png" },
  { name: "Philippines", flag: "https://flagcdn.com/16x12/ph.png" },
  { name: "Vietnam", flag: "https://flagcdn.com/16x12/vn.png" },
  { name: "Thailand", flag: "https://flagcdn.com/16x12/th.png" },
];

export default function WeServe() {
  return (
    <div className="py-12 last:mb-0 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="heading-sm text-4xl text-center md:heading-lg font-normal 2xl:heading-xl text-gray-900">
          Geographies We Serve
        </h2>
        <p className="text-center mt-5 pb-16">
          We can help you with picking out the best people for your company.
        </p>
        <div className="grid grid-cols-2 space-x-6 justify-center">
          <div>
            <img src="/assets/images/m2.png" alt="serve" />
          </div>
          <div className="columns-2">
            {countries.map((country, index) => (
              <div key={index} className="flex items-center gap-2 mb-3">
                <img
                  src={country.flag}
                  srcSet={`${country.flag.replace(
                    "24x18",
                    "48x36"
                  )} 2x, ${country.flag.replace("24x18", "48x36")} 3x`}
                  width="24"
                  height="18"
                  alt={country.name}
                />
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
