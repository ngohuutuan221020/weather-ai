const weatherCodeToString: {
    [key: number]: {
        icon: string;
        label: string;
    };
} = {
    0: {
        icon: "c01d",
        label: "Trời quang đãng",
    },
    1: {
        icon: "c02d",
        label: "Trời nhiều nắng",
    },
    2: {
        icon: "c03d",
        label: "Trời ít mây",
    },
    3: {
        icon: "c04d",
        label: "Trời nhiều mây",
    },
    45: {
        icon: "s05d",
        label: "Sương mù",
    },
    48: {
        icon: "s05d",
        label: "Sương muối",
    },
    51: {
        icon: "d01d",
        label: "Mưa phùn",
    },
    53: {
        icon: "d01d",
        label: "Mưa phùn",
    },
    55: {
        icon: "d01d",
        label: "Mưa phùn",
    },
    56: {
        icon: "d01d",
        label: "Mưa phùn lạnh",
    },
    57: {
        icon: "d01d",
        label: "Mưa phùn lạnh",
    },
    61: {
        icon: "r01d",
        label: "Mưa",
    },
    63: {
        icon: "r01d",
        label: "Mưa",
    },
    65: {
        icon: "r01d",
        label: "Mưa",
    },
    66: {
        icon: "f01d",
        label: "Mưa đá",
    },
    67: {
        icon: "f01d",
        label: "Mưa đá",
    },
    71: {
        icon: "s02d",
        label: "Tuyết",
    },
    73: {
        icon: "s02d",
        label: "Tuyết",
    },
    75: {
        icon: "s02d",
        label: "Tuyết",
    },
    77: {
        icon: "s02d",
        label: "Tuyết nhẹ",
    },
    80: {
        icon: "r02d",
        label: "Mưa rào",
    },
    81: {
        icon: "r02d",
        label: "Mưa rào",
    },
    82: {
        icon: "r02d",
        label: "Mưa rào",
    },
    85: {
        icon: "s01d",
        label: "Tuyết rơi",
    },
    86: {
        icon: "s01d",
        label: "Tuyết rơi",
    },
    95: {
        icon: "t04d",
        label: "Bão giông",
    },
    96: {
        icon: "t04d",
        label: "Bão giông",
    },
    99: {
        icon: "t04d",
        label: "Bão giông",
    },
};
export default weatherCodeToString;