## MERIT Project

- Our project is an Airbnb clone, a web application that allows users to find and book unique accommodations around the world. Just like Airbnb, our platform will enable hosts to list their properties and connect with travelers looking for a home away from home. With a user-friendly interface and advanced search features, our Airbnb clone promises to offer a seamless booking experience for both hosts and guests.

### Enviromental Setup

1. Created next application with app directory (Boiler Template)
2. Removed unnecessary files and made configurations to the styles by using TailwindCSS

### Navigation Bar UI

1. Created components and navbar folder, added 'logo.tsx' component, created images folder with 'logo.svg' inside
2. Created Navbar.tsx / Search.tsx / Container.tsx components, added the to 'layout.tsx' / added a 'secondlogo.svg' file to images
3. Created Usermenu.tsx / Avatar.tsx / Menuitem.tsx / ClientOnly.tsx component (fixed hydration error)

### Authentication / Modal / Register UI

1. Created RegisterModal.tsx / Heading.tsx component, created hooks folder / useRegisterModal.ts (zustand for hooks)
2. Created Input component / footerContent / added static toaster message / added ToasterProvider.tsx to remove the use client error

### MongoDB / Prisma

1. Initialized prisma / created database(atlas) / created schema/collections / set up next-auth / bcrypt
2. Created Login Functionality
   - Created Login Modal / useLoginModal hook (identical to RegisterModal)
   - Defined SafeUser type to exclude sensitive user information (app/types/index)
   - Implemented user registration endpoint with password hashing (app/api/register/route)
   - Created getCurrentUser function to retrieve user information (app/actions/getCurrentUser)
   - Added Open-Authorization from Github and Google to allow social logins
   - Added github / google url into next configuration to allow profile image to be shown
   - Modified .env file

### Categories UI

1. Created categoires ui below the navigation bar and added a simple routing using next navigation
2. Add a filtering function

### Listing Creation / Renting Modal / Function

1. Category Input / Rent Modal / useRentModalHook / Category Selection
2. Location selection / Map component / Country Autocomplete (leaflet / world-countries / react-select)
3. Counter component / Counter
4. Cloudinary component / Image upload function
5. Listings route / description/price section / finished rent modal

### Listing

1. Created ListingCard.tsx component / getListings.ts action
2. Favoriting functionality
