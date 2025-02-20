import React from 'react';
import heroImage from '../assets/hero.png';
import { Box, Button, Typography } from '@mui/material';

const HeroSection = () => {
    return (
        <Box
            sx={{
                position: "relative",
                height: "73vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed", // Padrão
                color: "white",
                px: { xs: 3, md: 20 },

                "@supports (-webkit-touch-callout: none)": {
                    backgroundAttachment: "scroll", // No iPhone, remove fixed
                },
            }}
        >
            {/* Overlay para escurecer a imagem */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.37)",
                }}
            />

            {/* Conteúdo */}
            <Box
                sx={{
                    borderRadius: "30px",
                    padding: "30px",
                    backgroundColor: "rgba(255, 255, 255, 0.06)",
                    position: "relative",
                    maxWidth: "650px",
                    width: "100%", // Garantir que a largura se ajuste no mobile
                    px: { xs: 3, md: 5 },
                    textAlign: "center"
                }}
            >
                <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
                    A complete digital marketing Solution
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, fontSize: { xs: "1rem", md: "1.25rem" } }}>
                    Lorem is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        mt: 3,
                        backgroundColor: "transparent",
                        "&:hover": { backgroundColor: "#8D48E8" },
                        padding: "12px 40px",
                        border: "1px solid #8D48E8",
                        fontSize: { xs: "1rem", md: "1.2rem" }, // Ajuste para o botão no mobile
                    }}
                >
                    Contact Us
                </Button>
            </Box>

            {/* Trapézio para transição */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100px",
                    background: "linear-gradient(135deg, #0a0a0a 20%,rgb(27, 0, 48) 80%)", // Mesma cor do fundo da próxima seção
                    clipPath: "polygon(0 100%, 100% 100%, 50% 0)",
                }}
            />
        </Box>
    );
};

export default HeroSection;
