# Use OpenJDK 17 base image
FROM openjdk:17-jdk-alpine

# Set working directory inside the container
WORKDIR /app

# Copy the built Spring Boot JAR into the container
COPY target/portfolio-0.0.1-SNAPSHOT.jar app.jar

# Expose default port 8080 (Spring Boot)
EXPOSE 8080

# Set default PORT for Render (will be overridden)
ENV PORT=8080

# Command to run the Spring Boot JAR
ENTRYPOINT ["java", "-jar", "app.jar"]
