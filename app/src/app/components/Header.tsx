import React from 'react';
// import { useScroll } from '../hooks/useScroll';
// import { Logo } from './Logo';
// import { NavLinks } from './NavLinks';
// import { UserProfile } from './UserProfile';
// import { SearchForm } from './SearchForm';
// import { useRouter, useSearchParams } from 'next/navigation';
// import Link from 'next/link';

export default function Header() {
  //   const isScrolled = useScroll();
  //   const router = useRouter();
  //   const params = useSearchParams();
  //   const initialSearchTerm = params.get('title') || '';
  //   const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  //   const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearchTerm(event.target.value);
  //   };

  //   const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     const newParams = new URLSearchParams(params.toString());
  //     newParams.set('title', searchTerm);
  //     router.push(`/search?${newParams.toString()}`);
  //   };

  return <header className='fixed top-0 z-20 flex w-full'>Header</header>;
}
