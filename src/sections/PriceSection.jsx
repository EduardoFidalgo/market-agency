import { Search } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography, Button, Box } from "@mui/material";
import * as React from "react";

const prices = [
    {
        plan: "Professional",
        bgColor: "linear-gradient(135deg, #6D5BBA, #8E09CF)",
        buttonColor: "#8E09CF",
    },
    {
        plan: "Business",
        bgColor: "linear-gradient(135deg, #6D5BBA, #8E09CF)",
        buttonColor: "#8E09CF",
    },
    {
        plan: "Enterprise",
        bgColor: "linear-gradient(135deg, #6D5BBA, #8E09CF)",
        buttonColor: "#8E09CF",
    },
];

const PriceSection = () => {
    return (
        <Box sx={{ textAlign: "center", py: { xs: 6, md: 10 }, background: "#fff" }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{
                    color: "#8E09CF",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    fontSize: { xs: "28px", md: "36px" }
                }}
            >
                Our Awesome Pricing Plan
            </Typography>
            <Typography
                variant="body1"
                color="black"
                sx={{ maxWidth: "90%", mx: "auto", mt: 2, mb: 6, fontSize: { xs: "16px", md: "18px" } }}
            >
                Choose the best plan that suits your business needs and budget.
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {prices.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                textAlign: "center",
                                borderRadius: "20px",
                                padding: { xs: "20px", md: "40px" },
                                height: { xs: "auto", md: "550px" },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                background: "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.25)",
                                },
                                ...(index === 1 && {
                                    transform: { xs: "scale(1.02)", md: "scale(1.1)" },
                                    background: "#15002B",
                                    color: "white",
                                    boxShadow: "0px 15px 50px rgba(93, 95, 239, 0.5)",
                                }),
                            }}
                        >
                            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                                <Search sx={{ fontSize: { xs: 60, md: 100 }, color: index === 1 ? "white" : "#8E09CF" }} />
                            </Box>

                            <CardContent>
                                <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                                    {item.plan}
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.8 }}>10 Social Accounts</Typography>
                                <Typography variant="body1" sx={{ opacity: 0.8 }}>32 Analytics Campaigns</Typography>
                                <Typography variant="body1" sx={{ opacity: 0.8 }}>35 Keywords</Typography>
                                <Typography variant="body1" sx={{ opacity: 0.8 }}>Branded Reports</Typography>
                                <Typography variant="body1" sx={{ opacity: 0.8, mb: 2 }}>Free Support</Typography>
                            </CardContent>

                            <Box
                                sx={{
                                    background: item.bgColor,
                                    padding: "14px",
                                    borderRadius: "8px",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    color: "white",
                                    textTransform: "uppercase",
                                }}
                            >
                                {item.plan}
                            </Box>
                            <br></br>
                            <Button
                                variant="contained"
                                sx={{
                                    background: item.buttonColor,
                                    fontWeight: "bold",
                                    fontSize: { xs: "14px", md: "16px" },
                                    padding: { xs: "10px", md: "12px" },
                                    borderRadius: "8px",
                                    color: "white",
                                    transition: "all 0.3s",
                                    "&:hover": {
                                        background: "white",
                                        color: item.buttonColor,
                                        boxShadow: `0px 0px 20px ${item.buttonColor}`,
                                    },
                                }}
                                fullWidth
                            >
                                Order Now
                            </Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PriceSection;
