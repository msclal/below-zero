## Update Website Information
We have made it accessible to update your store information and menu item listings by modifying specific configuration files.

These following files update the data displayed on the website:
- Business information: `public/data/store_info.js`
- Menu Item listings folder: `public/data`
   - Shaved Ice Combos: `public/data/combos.js`
   - Shakes: `public/data/shakes.js`
   - House Specialties: `public/data/specialties.js`
- Menu Items pictures folder: `public/product_pictures`
   - Shaved Ice Combos pictures folder: `public/product_pictures/combos`
   - Shakes pictures folder: `public/product_pictures/shakes`
   - House Specialties pictures folder: `public/product_pictures/specialties`

### Update Business Information
Let's say you want to update the hours of your business.
1. Locate the file `public/data/store_info.js`. The file should look like this:
    ```
    export const storeInfo = {
        hours: "Everyday: 12:00PM - 8:00PM",
        address: "583 E. Foothill Blvd. Suite #6",
        city_state: "Upland, CA 91786",
        phoneNumber: "(909) 920-9230",
        email: "BelowZeroShavedIce@gmail.com",
        instagram: "https://www.instagram.com/belowzeroshavedice/?hl=en",
        yelp: "https://www.yelp.com/biz/below-zero-shaved-ice-upland",
        facebook: "https://www.facebook.com/p/Below-Zero-Shaved-Ice-100065604604709/",
    };
    ```
2. Simply modify `hours: "Everyday: 12:00PM - 8:00PM"` within the file. This should update the hours information shown on the Contact page and the footer of the website.

### Remove Menu Item
Let's say you want to discontinue or remove the 'Happy Day Rainbow' Shaved Ice Combo from your menu. There are two options: delete from file or hide the item temporarily. 

**To Hide Temporarily:**

1. Locate the file that has all Shaved Ice Combo information: `public/data/combos.js`
2. In the file, locate 'Happy Day Rainbow'. It should look something like this:
   ```
    {
        picture: "/product_pictures/combos/HappyRainbow/HappyRainbow.webp",
        name: "Happy Day Rainbow",
        description: "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
        visible: true,
    },
    ```
3. Set the value of `visible` to `false`. It should look like this:
    ```
    {
        picture: "/product_pictures/combos/HappyRainbow/HappyRainbow.webp",
        name: "Happy Day Rainbow",
        description: "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
        visible: false,
    },
    ```
4. To make the menu item visible, set the value back to `true`.

**To Delete From File:**

1. Locate the file that has all Shaved Ice Combo information: `public/data/combos.js`
2. In the file, locate 'Happy Day Rainbow'. It should look something like this:
    ```
    {
        picture: "/product_pictures/combos/HappyRainbow/HappyRainbow.webp",
        name: "Happy Day Rainbow",
        description: "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
        visible: true,
    },
    ```
3. To remove this item, highlight the entire item from `{` to `},` (including the following comma `,`) and hit the delete key on your keyboard.


### Edit Menu Item Name/Description
Let's say you want to update the name or description of the 'Happy Day Rainbow' Shaved Ice Combo.
1. Firstly, all Shaved Ice Combo menu listings are located in the file `public/data/combos.js`.
2. Locate the 'Happy Day Rainbow' information within the file. We should see this:
    ```
    {
        picture: "/product_pictures/combos/HappyRainbow/HappyRainbow.webp",
        name: "Happy Day Rainbow",
        description: "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
        visible: true,
    },
    ```
3. To update the name and/or description listed for this menu item, just modify the information within `name` and `description` fields of the 'Happy Day Rainbow' in the file.
4. Something like this updates the name and description of this menu item:
    ```
    {
        picture: "/product_pictures/combos/HappyRainbow/HappyRainbow.webp",
        name: "Sad Day Rainbow",
        description: "Blue Ice Cream",
        visible: true,
    },
    ```
5. If the item does not have a description leave the field empty like this:
   ```
    {
        picture: "/product_pictures/combos/HappyRainbow/HappyRainbow.webp",
        name: "Sad Day Rainbow",
        description: "",
        visible: true,
    },
    ```

### Update Menu Item Picture
*It's important to minimize the size/quality of the picture you will be uploading as it can affect the website's loading latencies. Therefore, its important to maintain a relatively small image size (ideally less than ~50kb) with a .webp or .png format. Depending on menu item, make sure the image has the following dimensions: Shaved Ice (579x579), Shaved Ice Combos (579x579), Shakes (669x736), House Specialties (525x525).*

Let's say you want to update the picture of the 'Happy Day Rainbow' Shaved Ice Combo.
1. Firstly, all Shaved Ice Combo product pictures are located in the folder `public/product_pictures/combos`.
2. Within that folder, locate the file containing the 'Happy Day Rainbow' `public/product_pictures/combos/HappyRainbow/HappyRainbow.webp`.
3. Delete this image and replace it with a new image that's ideally less than 50kb size with a `.webp` or `.png` format. We'll call this image `SadDayRainbow.png`. Depending on menu item, make sure the image has the following dimensions:

      Image Dimensions:
      - Shaved Ice: `579x579`
      - Shaved Ice Combos: `579x579`
      - Shakes: `669x736`
      - House Specialties: `525x485`

5. Now that we've uploaded a new picture, we need to update the image listed for 'Happy Day Rainbow' with our new image.
6. Go to the Shaved Ice Combo menu listings located in the file `public/data/combos.js`.
7. Locate the 'Happy Day Rainbow' information within the file. We should see this:
    ```
    {
        picture: "/product_pictures/combos/HappyRainbow/HappyRainbow.webp",
        name: "Happy Day Rainbow",
        description: "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
        visible: true,
    },
    ```
8. To update the image listed for this menu item, modify the `picture` field with the file path of the new 'Happy Day Rainbow' image you just created within the `public/product_pictures/combos` in steps 1-3.
9. Something like this updates the name and description of this menu item. Here we uploaded a new image called `SadDayRainbow.png`:
    ```
    {
        picture: "public/product_pictures/combos/HappyRainbow/SadDayRainbow.png",
        name: "Happy Day Rainbow",
        description: "Cherry, Blue Gum, and Banana Shaved Ice with Cotton Candy Ice Cream",
        visible: true,
    },
    ```
## Developing on our Codebase
### Getting Started with Next.js Development
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

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
