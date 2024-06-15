
const shops = [
    {
        id: 1,
        name: 'Platinum Fashion Mall',
        description: 'Fashion mall with over 1,300 shops',
        image: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/63/2016/11/08023345/destination-platinum-mall.jpg',
        city: 'Bangkok',
        address: '222 Phetchaburi Rd, Thanon Phetchaburi, Ratchathewi, Bangkok 10400, Thailand',
    },
    {
        id: 2,
        name: 'MBK Center',
        description: 'Shopping mall with over 2,000 shops',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/84/9b.jpg',
        city: 'Bangkok',
        address: '444 Phayathai Rd, Wang Mai, Pathum Wan District, Bangkok 10330, Thailand',
    },
    {
        id: 3,
        name: 'Pratunam Night Market',
        description: 'Market with clothing, accessories, and more',
        image: 'https://images.hive.blog/1536x0/https://files.peakd.com/file/peakd-hive/hiddenblade/23tbijPBNmhECE7a76uTrFyELNz67M93ACktEKRde8gGuWSFVbU3RALjuWaAEAfR9884Y.jpg',
        city: 'Bangkok',
        address: '869/1 Ratchaprarop Rd, Khwaeng Thanon Phaya Thai, Khet Ratchathewi, Krung Thep Maha Nakhon 10400, Thailand',
    },
    {
        id: 4,
        name: 'Chatuchak Weekend Market',
        description: 'Market with clothing, accessories, and more',
        image: 'https://www.tripsavvy.com/thmb/Ol0TZtPgX64w9qzPsGtn85ChAUs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chatuchak-weekend-market-bangkok-59c809f5845b340011afb2fb.jpg',
        city: 'Bangkok',
        address: '587/10 Kamphaeng Phet 2 Rd, Chatuchak, Bangkok 10900, Thailand',
    },
    {
        id: 5,
        name: 'Asiatique The Riverfront',
        description: 'Shopping, dining, and entertainment complex',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/38/a4/11/inside-asiatique.jpg?w=1200&h=-1&s=1',
        city: 'Bangkok',
        address: '2194 Charoen Krung Rd, Wat Phraya Krai, Bang Kho Laem, Bangkok 10120, Thailand',
    },
    {
        id: 6,
        name: 'IconSiam',
        description: 'Luxury shopping mall',
        image: 'https://i.pinimg.com/736x/5d/c4/f5/5dc4f526fbc039985c4200e4399a22eb.jpg',
        city: 'Bangkok',
        address: '299 Charoen Nakhon Rd, Khlong Ton Sai, Khlong San, Bangkok 10600, Thailand',
    },
    {
        id: 7,
        name: 'CentralWorld',
        description: 'Shopping mall with over 500 shops',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/05/7e/9d/centralworld.jpg',
        city: 'Bangkok',
        address: '999/9 Rama I Rd, Pathum Wan, Pathum Wan District, Bangkok 10330, Thailand',
    },
    {
        id: 8,
        name: 'Terminal 21',
        description: 'Shopping mall with a global theme',
        image: 'https://i.pinimg.com/originals/1d/3d/dd/1d3ddd925c09134a775af0f13cb8df51.jpg',
        city: 'Bangkok',
        address: '88 Soi Sukhumvit 19, Khwaeng Khlong Toei Nuea, Khet Watthana, Bangkok 10110, Thailand',
    },
    {
        id: 9,
        name: 'Chiang Mai Night Bazaar',
        description: 'Market with clothing, accessories, and more',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/64/da.jpg',
        city: 'Chiang Mai',
        address: 'Chang Khlan Rd, Tambon Chang Khlan, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50100, Thailand',
    },
    {
        id: 10,
        name: 'Ao Nang Walking Street',
        description: 'Market with clothing, accessories, and more',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ca/0c/ff/ao-nang-night-market.jpg',
        city: 'Krabi',
        address: '4203, Tambon Ao Nang, Amphoe Mueang Krabi, Chang Wat Krabi 81000, Thailand',
    },
    {
        id: 11,
        name: 'Jodd Fairs Night Market',
        description: 'Market with clothing, accessories, and more',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjv9lsdkjyiAwSepIPs-XVbtxDVi-eCLv6yISlFjQ4QU9YDw1FPpOE67yrZBYbNmrE2C1pGsPis0sK6IkOaBRbX6qqpuj4XCKS6jfkzB8U7k0w_tK84lLEfyhoBp9ycbKCZHYOElZeUcoWLQeyBvrlbkLapJudsunLRr64SPNLkGSCubgT_CsHZ5jYI9g/w640-h436/Jodd%20Fairs.jpg',
        city: 'Bangkok',
        address: 'Rama IV Rd, Khlong Toei, Bangkok 10110, Thailand',
    },
    {
        id: 12,
        name: "Sampheng Market",
        description: 'Market with clothing, accessories, and more',
        image: 'https://img1.10bestmedia.com/Images/Photos/239598/p-sam_55_660x440_201404242206.jpg',
        city: 'Bangkok',
        address: 'Samphanthawong, Bangkok 10100, Thailand',
    }, 
    {
        id: 13,
        name: 'Damnoen Saduak Floating Market',
        description: 'Floating market with food and souvenirs',
        image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/6c/1d.jpg',
        city: 'Bangkok',
        address: 'Damnoen Saduak, Ratchaburi 70130, Thailand',
    },
    {
        id: 14,
        name: 'Krabi Town Night Market',
        description: 'Market with clothing, accessories, and more',
        image: 'https://digitaltravelcouple.com/wp-content/uploads/2020/06/krabi-town-market.jpg',
        city: 'Krabi',
        address: 'Maharaj Rd, Tambon Pak Nam, Amphoe Mueang Krabi, Chang Wat Krabi 81000, Thailand',
    },
    {
       

    }
    
    ];

    export default shops;