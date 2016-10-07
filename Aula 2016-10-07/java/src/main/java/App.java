import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.async.Callback;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.json.JSONObject;
import java.util.Arrays;
import java.util.function.BiConsumer;

/*
 * @author mcarvalho, @date 10/6/16 4:35 PM
 */
public class App {

    public static void main(String[] args) throws Exception {

        if(args.length == 0) args = new String[]{"439", "430", "436"};
    
    
        System.out.println("############ Getting team leaders synchronous");
        Arrays
            .stream(args)
            //.map(App::getTeamLeader)
            .map(id -> getTeamLeader(id))
            .forEach(team -> {System.out.println(team); sleep(1000);} );
            
        System.out.println("############ Getting team leaders Async");
        Arrays
            .stream(args)
            .forEach(id -> getTeamLeaderAsync(id, App::printTeam));
        
    }
    
    static void printTeam(Exception e, String teamName) { // Same idiomatic Node callback
        if(e != null) throw new RuntimeException(e);
        else {
            System.out.println(teamName);
            sleep(1000);
        }
    }
    
    static void sleep(int milis) {
        try{
             Thread.sleep(milis);
        } catch(Exception e) {
            throw new RuntimeException(e);
        }
    }
    
    public static String getTeamLeader(String leagueId) {
        try {
            System.out.println("getTeamLeader thread id:" + Thread.currentThread().getId());
            HttpResponse<JsonNode> resp = Unirest
                .get("http://api.football-data.org/v1/soccerseasons/{leagueId}/leagueTable")
                .routeParam("leagueId", leagueId)
                .asJson();
            return resp
                    .getBody()
                    .getObject()
                    .getJSONArray("standing")
                    .getJSONObject(0)
                    .getString("teamName");
        } catch(Exception e) {
            throw new RuntimeException(e);
        }
    }

    public static void getTeamLeaderAsync(
        String leagueId, 
        BiConsumer<Exception, String> callback) 
    {
        try {


            Unirest.get("http://api.football-data.org/v1/soccerseasons/{leagueId}/leagueTable")
                .routeParam("leagueId", leagueId)
                .asJsonAsync(new Callback<JsonNode>() {
                    public void failed(UnirestException e) { callback.accept(e, null); }

                    public void completed(HttpResponse<JsonNode> resp) {
                        System.out.println("completed thread id:" + Thread.currentThread().getId());
                        String leader = resp.getBody()
                                            .getObject()
                                            .getJSONArray("standing")
                                            .getJSONObject(0)
                                            .getString("teamName");
                        callback.accept(null, leader);
                    }

                    public void cancelled() {
                        callback.accept(new RuntimeException("The request has been cancelled"), null);
                    }
                });
        } catch(Exception e) {
            throw new RuntimeException(e);
        }
        System.out.println("getTeamLeaderAsync thread id:" + Thread.currentThread().getId());

    }
}
