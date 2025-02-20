import { Brush, Code, BarChart } from "@mui/icons-material";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import * as React from "react";

const services = [
    {
        icon: <Brush sx={{ fontSize: { xs: 60, md: 100 }, color: "#8E09CF" }} />, // Ícone menor no mobile
        title: "Creative Design",
        description: "Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing.",
    },
    {
        icon: <Code sx={{ fontSize: { xs: 60, md: 100 }, color: "#8E09CF" }} />,
        title: "Web Development",
        description: "Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing.",
    },
    {
        icon: <BarChart sx={{ fontSize: { xs: 60, md: 100 }, color: "#8E09CF" }} />,
        title: "Data & Analytics",
        description: "Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing.",
    },
];

const ServiceSection = () => {
    return (
        <Box
            sx={{
                textAlign: "center",
                py: { xs: 6, md: 10 }, // Redução do padding no mobile
                background: "linear-gradient(135deg, #0a0a0a 30%, #25003E 90%)"
            }}
        >
            <Typography
                variant="h4"
                fontWeight="bold"
                color="white"
                sx={{ mb: { xs: 3, md: 5 }, fontSize: { xs: "2rem", md: "2.5rem" } }} // Tamanho do título ajustado
            >
                Our Expertise
            </Typography>

            <Grid container spacing={4} justifyContent="center">
                {services.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                textAlign: "center",
                                padding: { xs: 3, md: 4 }, // Redução do padding no mobile
                                backgroundColor: "#15002B",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                boxShadow: "0px 4px 12px rgba(177, 102, 246, 0.2)",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0px 8px 20px rgba(177, 102, 246, 0.3)",
                                },
                            }}
                        >
                            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                                {item.icon}
                            </Box>
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    fontWeight="bold"
                                    color="#8E09CF"
                                    sx={{ mb: 2, fontSize: { xs: "1rem", md: "1.25rem" } }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="white" sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServiceSection;
