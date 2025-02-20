import { Grid, Typography, Button, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import * as React from "react";
import helpImage from "../assets/help.png";

const AboutSection = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", padding: "50px 20px" }}>
            <Grid container maxWidth="lg" alignItems="center">
                {/* Imagem com fundo roxo */}
                <Grid
                    item
                    xs={12}
                    md={7}
                    sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            width: "100%",
                            height: "90%",
                            backgroundColor: "#8E09CF",
                            borderRadius: "10px",
                            zIndex: 1,
                        }}
                    />
                    <img
                        src={helpImage}
                        alt="Team working"
                        style={{
                            width: "90%",  // Para ocupar o máximo do container
                            maxWidth: "750px",  // Aumenta o tamanho máximo da imagem
                            height: "auto",
                            position: "relative",
                            zIndex: 2,
                            borderRadius: "10px",
                            boxShadow: "0px 4px 20px rgba(179, 102, 246, 0.4)",
                        }}
                    />


                </Grid>

                {/* Texto e Lista */}
                <Grid item xs={12} md={5} sx={{ paddingLeft: { xs: 0, md: 4 } }}>
                    <Typography variant="h4" fontWeight="bold" color="#8E09CF">
                        How we solve your problem?
                    </Typography>

                    <Box sx={{ mt: 2 }}>
                        {["Lorem Ipsum is simply dummy text of the printing.",
                            "Lorem Ipsum is simply dummy text of the.",
                            "Lorem Ipsum is simply dummy text.",
                            "Lorem Ipsum is simply dummy text of the printing."]
                            .map((text, index) => (
                                <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                    <CheckCircleIcon sx={{ color: "#B166F6", mr: 1 }} />
                                    <Typography variant="body1">{text}</Typography>
                                </Box>
                            ))}
                    </Box>

                    <Button
                        variant="contained"
                        sx={{
                            mt: 3,
                            backgroundColor: "#8E09CF",
                            color: "#fff",
                            padding: "10px 20px",
                            fontSize: "16px",
                            textTransform: "none",
                            borderRadius: "5px",
                            "&:hover": { backgroundColor: "#9b50e1" },
                        }}
                    >
                        Learn More
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutSection;
