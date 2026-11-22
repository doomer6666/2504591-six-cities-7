import type { City } from '@/types';

type CityListProps = {
  cities: City[];
  selectedCity: string;
  onCitySelect: (cityName: string) => void;
};

export const CityList = ({
  cities,
  selectedCity,
  onCitySelect,
}: CityListProps) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item" key={city.name}>
          <a
            className={`locations__item-link tabs__item${city.name === selectedCity ? ' tabs__item--active' : ''}`}
            href={`#${city.name}`}
            aria-current={city.name === selectedCity ? 'page' : undefined}
            onClick={(event) => {
              event.preventDefault();
              onCitySelect(city.name);
            }}
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </section>
);
