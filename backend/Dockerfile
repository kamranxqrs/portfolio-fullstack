# Use OpenJDK 17 base image
FROM openjdk:17-jdk-alpine

# Set working directory inside the container
WORKDIR /app

# Copy the already-built Spring Boot JAR into the container
COPY target/portfolio-0.0.1-SNAPSHOT.jar app.jar

# Expose default port 8080
EXPOSE 8080

# Render will override PORT automatically
ENV PORT=8080

# Run the Spring Boot app
ENTRYPOINT ["java","-jar","app.jar"]
