
# Updating Website Information
We have made it accessible to update your store information and menu item listings by modifying specific configuration files.

## File/Folder Locations
These following files update the data displayed on the website:
- Business information: `public/data/store_info.js`
- Menu Item listings folder: `public/data`
   - Shaved Ice: `public/data/shavedice.js`
   - Shaved Ice Combos: `public/data/combos.js`
   - Shakes: `public/data/shakes.js`
   - House Specialties: `public/data/specialties.js`
- Menu Items pictures folder: `public/product_pictures`
   - Shaved Ice pictures folder: `public/product_pictures/shavedice`
   - Shaved Ice Combos pictures folder: `public/product_pictures/combos`
   - Shakes pictures folder: `public/product_pictures/shakes`
   - House Specialties pictures folder: `public/product_pictures/specialties`

## How To...

- [Update Business Hours / Contact Information](#update-business-information)
- [Add a Menu Item](#add-a-menu-item)
- [Remove a Menu Item](#remove-a-menu-item)
- [Update a Menu Item's Name / Description](#update-a-menu-items-namedescription)
- [Update a Menu Item's Picture](#update-a-menu-items-picture)
- [Update the Menu Page's Banner](#update-the-menu-pages-banner)

---

### Update Business Information
You can update your business's store information such as:
   - Hours for each day of the week
   - Address
   - Phone Number
   - Email
   - Instagram, Yelp, Facebook links

Let's say you want to update the hours of your business.
1. Locate the file `public/data/store_info.js`. The file should look like this:
    ```
    export const storeInfo = {
        hours: {
            monday: "Closed",
            tuesday: "12PM - 7PM",
            wednesday: "12PM - 7PM",
            thursday: "12PM - 7PM",
            friday: "12PM - 7PM",
            saturday: "12PM - 7PM",
            sunday: "12PM - 7PM",
            closedOnRainyDays: true,
        },
        address: "583 E. Foothill Blvd. Suite #6",
        city_state: "Upland, CA 91786",
        phoneNumber: "(909) 920-9230",
        email: "BelowZeroShavedIce@gmail.com",
        instagram: "https://www.instagram.com/belowzeroshavedice/?hl=en",
        yelp: "https://www.yelp.com/biz/below-zero-shaved-ice-upland",
        facebook: "https://www.facebook.com/p/Below-Zero-Shaved-Ice-100065604604709/",
    };
    ```
2. Simply modify the text inside the `hours: {...}`. For example, you would modify the "sunday" field to indicate that Sunday is closed:
   ```
    export const storeInfo = {
        hours: {
            monday: "Closed",
            tuesday: "12PM - 7PM",
            wednesday: "12PM - 7PM",
            thursday: "12PM - 7PM",
            friday: "12PM - 7PM",
            saturday: "12PM - 7PM",
            sunday: "Closed",
            closedOnRainyDays: true,
        },
        address: "583 E. Foothill Blvd. Suite #6",
        city_state: "Upland, CA 91786",
        phoneNumber: "(909) 920-9230",
        email: "BelowZeroShavedIce@gmail.com",
        instagram: "https://www.instagram.com/belowzeroshavedice/?hl=en",
        yelp: "https://www.yelp.com/biz/below-zero-shaved-ice-upland",
        facebook: "https://www.facebook.com/p/Below-Zero-Shaved-Ice-100065604604709/",
    };
    ``` 
3. This should update the store hours shown on the Contact page and the footer of the website.
4. After completing these steps, save these file changes on GitHub. After a few minutes, the site should automatically deploy these changes to `www.belowzeroshavedice.com`.

### Add a Menu Item
Let's say you want to add 'Sad Day Rainbow' to the Shaved Ice Combo menu.
1. **Add a picture**
  
   - First, you need to upload an image for the new menu item. Make sure the image is saved in the appropriate menu category (i.e. if the new menu item is a 'Shaved Ice Combo' item, it should be saved under the 'Combos' folder: `public/product_pictures/combos/`). 
   - For example, the image for 'Sad Day Rainbow' should be named `SadDayRainbow.webp` under the folder `SadDayRainbow`, and is located under the Combos folder. The file path location should be `public/product_pictures/combos/SadDayRainbow/SadDayRainbow.webp`.

    [Click to see the full list of folder locations for menu items (Shaved Ice, Shaved Ice Combos, Shakes, House Specialties)](#filefolder-locations)

    *Note: It's important to minimize the size/quality of the picture you will be uploading as it can affect the website's loading latencies. Therefore, its important to maintain a relatively small image size (ideally less than ~50kb) with a .webp or .png format. Depending on menu item, make sure the image has the following dimensions: Shaved Ice (579x579), Shaved Ice Combos (579x579), Shakes (669x736), House Specialties (525x525).*

2. **Add information about the new item**
   - Locate the file that has all Shaved Ice Combo information: `public/data/combos.js`
   - Scroll to the bottom of the existing list of combos. You will see items formatted like this:
    ```
    {
        picture: "/product_pictures/combos/Example/Example.webp",
        name: "Example Name",
        description: "Example description.",
        visible: true,
    },
    ```
   - Fill in the Details:
        - Replace the placeholder text with the actual details for your new item "Sad Day Rainbow":
            - picture: Enter the file path location of the image you just created. From step 1, you added the picture `SadDayRainbow.webp` located under the folder `public/product_pictures/combos/SadDayRainbow`. So, you'll put its file path location here (without the "public/").
            - name: Enter the name of the new menu item.
            - description: Provide a brief description of the new item.
            - visible: Leave this as true to make the item visible on the website.
        - Your new item should look something like this:
    ```
    {
        picture: "/product_pictures/combos/SadDayRainbow/SadDayRainbow.webp",
        name: "Sad Day Rainbow",
        description: "Blue Ice Cream",
        visible: true,
    },
    ```
5. Add this item to the file (from `{` to `},` with the comma `,`)
6. After completing these steps, save these file changes on GitHub. After a few minutes, the site should automatically deploy these changes to `www.belowzeroshavedice.com`.

### Remove a Menu Item
[Click to see the full list of folder locations for menu items (Shaved Ice, Shaved Ice Combos, Shakes, House Specialties)](#filefolder-locations)

Let's say you want to discontinue or remove the 'Happy Day Rainbow' Shaved Ice Combo from your menu. There are two options: hide the item temporarily or delete the item permanently. 

**To Hide an Item Temporarily:**

1. Locate the file that has all Shaved Ice Combo information: `public/data/combos.js`
2. In the file, locate 'Happy Day Rainbow'. It should look something like this:
   ```
    {
        picture: "/product_pictures/combos/HappyDayRainbow/HappyDayRainbow.webp",
        name: "Happy Day Rainbow",
        description: "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
        visible: true,
    },
    ```
3. Set the value of `visible` to `false`. It should look like this:
    ```
    {
        picture: "/product_pictures/combos/HappyDayRainbow/HappyDayRainbow.webp",
        name: "Happy Day Rainbow",
        description: "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
        visible: false,
    },
    ```
4. Now, the menu item is hidden from the Menu page of the website.
5. If in the future you mant to make the menu item visible again, set the value back to `true`.
6. After completing these steps, save these file changes on GitHub. After a few minutes, the site should automatically deploy these changes to `www.belowzeroshavedice.com`.

**Delete the Item Permanently**

1. Locate the file that has all Shaved Ice Combo information: `public/data/combos.js`
2. In the file, locate 'Happy Day Rainbow'. It should look something like this:
    ```
    {
        picture: "/product_pictures/combos/HappyDayRainbow/HappyDayRainbow.webp",
        name: "Happy Day Rainbow",
        description: "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
        visible: true,
    },
    ```
3. To remove this item, highlight the entire item from `{` to `},` (including the following comma `,`) and hit the delete key on your keyboard.
4. After completing these steps, save these file changes on GitHub. After a few minutes, the site should automatically deploy these changes to `www.belowzeroshavedice.com`.


### Update a Menu Item's Name/Description

Let's say you want to update the name or description of the 'Happy Day Rainbow' Shaved Ice Combo.
1. Firstly, all Shaved Ice Combo menu listings are located in the file `public/data/combos.js`.

    [Click to see the full list of folder locations for menu items (Shaved Ice, Shaved Ice Combos, Shakes, House Specialties)](#filefolder-locations)

2. Locate the 'Happy Day Rainbow' information within the file. We should see this:
    ```
    {
        picture: "/product_pictures/combos/HappyDayRainbow/HappyDayRainbow.webp",
        name: "Happy Day Rainbow",
        description: "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
        visible: true,
    },
    ```

3. To update the name and/or description listed for this menu item, just modify the information within `name` and `description` fields of the 'Happy Day Rainbow' in the file.
4. Something like this updates the name and description of this menu item:
    ```
    {
        picture: "/product_pictures/combos/HappyDayRainbow/HappyDayRainbow.webp",
        name: "Sad Day Rainbow",
        description: "Blue Ice Cream",
        visible: true,
    },
    ```
5. If the item does not have a description leave the field empty like this:
   ```
    {
        picture: "/product_pictures/combos/HappyDayRainbow/HappyDayRainbow.webp",
        name: "Sad Day Rainbow",
        description: "",
        visible: true,
    },
    ```
6. After completing these steps, save these file changes on GitHub. After a few minutes, the site should automatically deploy these changes to `www.belowzeroshavedice.com`.

### Update a Menu Item's Picture

*It's important to minimize the size/quality of the picture you will be uploading as it can affect the website's loading latencies. Therefore, its important to maintain a relatively small image size (ideally less than ~50kb) with a .webp or .png format. Depending on menu item, make sure the image has the following dimensions: Shaved Ice (579x579), Shaved Ice Combos (579x579), Shakes (669x736), House Specialties (525x525).*

Let's say you want to update the picture of the 'Happy Day Rainbow' Shaved Ice Combo.

1. Firstly, all Shaved Ice Combo product pictures are located in the folder `public/product_pictures/combos`.

    [Click to see the full list of folder locations for menu items (Shaved Ice, Shaved Ice Combos, Shakes, House Specialties)](#filefolder-locations)

2. Within that folder, locate the file containing the 'Happy Day Rainbow' `public/product_pictures/combos/HappyDayRainbow/HappyDayRainbow.webp`.
3. Delete this image and replace it with a new image that's ideally less than 50kb size with a `.webp` or `.png` format. You'll call this image `NewHappyDayRainbow.png`. Depending on menu item, make sure the image has the following dimensions:

      Image Dimensions:
      - Shaved Ice: `579x579`
      - Shaved Ice Combos: `579x579`
      - Shakes: `669x736`
      - House Specialties: `525x485`

5. Now that you've uploaded a new picture, you need to update the image listed for 'Happy Day Rainbow' with your new image.
6. Go to the Shaved Ice Combo menu listings located in the file `public/data/combos.js`.
7. Locate the 'Happy Day Rainbow' information within the file. We should see this:
    ```
    {
        picture: "/product_pictures/combos/HappyDayRainbow/HappyDayRainbow.webp",
        name: "Happy Day Rainbow",
        description: "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
        visible: true,
    },
    ```
8. To update the image listed for this menu item, update the `picture` field with the file path of the new 'Happy Day Rainbow' image you just created under the folder `public/product_pictures/combos/HappyDayRainbow` in steps 1-3.
    ```
    {
        picture: "public/product_pictures/combos/HappyDayRainbow/NewHappyDayRainbow.png",
        name: "Happy Day Rainbow",
        description: "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
        visible: true,
    },
    ```
10. After completing these steps, save these file changes on GitHub. After a few minutes, the site should automatically deploy these changes to `www.belowzeroshavedice.com`.

### Update the Menu Page's Banner 
*Menu banner image must be around 2916x1208 dimension, image size ideally less than ~200kb, and is a .webp format.*

1. Locate the file `public/menu/banner.webp` and delete the file
3. Add a new file with the same name `banner.webp` under the same location in `public/menu`
6. After completing these steps, save these file changes on GitHub. After a few minutes, the site should automatically deploy these changes to `www.belowzeroshavedice.com`.

## Services Used
   - **EmailJS**: Connects the website’s contact form to an email account. It lets visitors send messages from the website directly to your email inbox.

   - **Namecheap**: Where you bought your website’s domain name (`www.belowzeroshavedice.com`) and keep it registered so people can find your site online.

   - **GitHub**: Online storage space for your website’s code. It helps us keep the code safe, make easy file updates, and download the code if needed.

   - **Vercel**: Hosts your website (keeps it live on the internet). It is is connected to GitHub; whenever you make file changes to the code on Github, Vercel updates the website automatically, so it always shows the latest version on `www.belowzeroshavedice.com`.

## Developing with Next.js
### Getting Started
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
