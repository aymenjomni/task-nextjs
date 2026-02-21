# Étape 1 : Build (SDK Image - Heavy) [cite: 54]
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copier les fichiers de projet et restaurer les dépendances
COPY *.csproj ./
RUN dotnet restore

# Copier tout le reste et compiler (Release mode)
COPY . .
RUN dotnet publish -c Release -o /app/publish

# Étape 2 : Production (Runtime Image - Light) [cite: 55]
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
EXPOSE 8080

# Copier uniquement les binaires compilés depuis l'étape précédente
COPY --from=build /app/publish .

# Point d'entrée
ENTRYPOINT ["dotnet", "Backend.dll"]
