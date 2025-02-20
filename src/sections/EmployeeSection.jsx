import { Box, Typography, Avatar, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const founders = [
    {
        name: "Martino Gomez",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem purus interdum, pretium inmo, malesuada elit.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sophia Williams",
        description:
            "Vestibulum non semper posuere et nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        name: "James Anderson",
        description:
            "Malesuada elit non semper posuere et nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
];

const EmployeeSection = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(135deg, #1A1A2E, #25003E)",
                color: "white",
                padding: { xs: "50px 20px", md: "100px" },
                mt: 5,
            }}
        >
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                }}
                loop
            >
                {founders.map((founder, index) => (
                    <SwiperSlide key={index}>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="center"
                            sx={{ maxWidth: "900px", margin: "0 auto", flexDirection: { xs: "column", md: "row" }, textAlign: "center" }}
                        >
                            <Grid item>
                                <Avatar
                                    src={founder.image}
                                    alt={founder.name}
                                    sx={{ width: { xs: 120, md: 180 }, height: { xs: 120, md: 180 } }}
                                />
                            </Grid>
                            <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Typography variant="h5" fontWeight="bold">
                                    {founder.name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ mt: 2, fontSize: { xs: "1rem", md: "1.2rem" }, maxWidth: "600px" }}
                                >
                                    {founder.description}
                                </Typography>
                            </Grid>
                        </Grid>

                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default EmployeeSection;
